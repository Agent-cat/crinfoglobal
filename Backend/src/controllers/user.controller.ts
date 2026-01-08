import prisma from "../utils/prisma.js";
import bcrypt from "bcryptjs";
import { generateToken } from "../utils/token.js";
import { generateOTP } from "../services/email.service.js";
import crypto from "crypto";
import { queueOTPEmail, queuePasswordReset } from "../services/emailQueue.service.js";

export const Signin = async (req: any, res: any) => {
  const { email, password } = req.body;
  try {
    const user = await prisma.user.findUnique({
      where: { email },
    });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (!user.emailVerified) {
      return res.status(401).json({ message: "Please verify your email before signing in" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = generateToken(user.id, res);
    res.status(200).json({
      message: "Success",
      data: { id: user.id, email: user.email, userName: user.userName, role: user.role },
      token: token, // Also return token for localStorage
    });
  } catch (error) {
    res.status(500).json({ message: `Failed ${error}` });
  }
};

export const Signup = async (req: any, res: any) => {
  const { email, userName, password } = req.body;

  try {
    // Check if user already exists in main table
    const existingUser = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (existingUser) {
      if (existingUser.emailVerified) {
        return res
          .status(400)
          .json({ message: "User with this email already exists" });
      } else {
        // User exists but is unverified (likely from legacy flow)
        // Delete from User table so we can use the strict PendingUser flow
        await prisma.user.delete({
          where: { email: email },
        });
      }
    }

    const salt = await bcrypt.genSalt(10);
    const encryptedPassword = await bcrypt.hash(password, salt);

    // Generate OTP and set expiration (10 minutes from now)
    const otp = generateOTP();
    const otpExpiresAt = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes

    // Store in PendingUser table instead of User table
    await prisma.pendingUser.upsert({
      where: { email },
      update: {
        userName,
        password: encryptedPassword,
        otpCode: otp,
        otpExpiresAt: otpExpiresAt,
        createdAt: new Date(),
      },
      create: {
        email,
        userName,
        password: encryptedPassword,
        otpCode: otp,
        otpExpiresAt: otpExpiresAt,
      },
    });

    // Queue OTP email (non-blocking)
    try {
      queueOTPEmail(email, otp);
    } catch (emailError) {
      console.error('Failed to queue OTP email:', emailError);
      // Continue anyway - user can request resend if needed
    }

    res.status(200).json({
      message: "Verification code sent to your email. Please verify to complete registration.",
      data: { email: email }
    });
  } catch (error) {
    res.status(500).json({ message: `Failed ${error} ` });
  }
};

export const Logout = async (req: any, res: any) => {
  try {
    res.cookie("jwt", "", {
      httpOnly: true,
      sameSite: "lax",
      secure: false, // Match the generateToken settings
      path: "/",
      expires: new Date(0),
    });
    res.json({
      message: "user logged out",
    });
  } catch (error: any) {
    res.status(500).json({ message: "Internal server error" });
  }
};

export const UpdateUser = async (req: any, res: any) => {
  const id = req.params.id;
  const { email, userName, password } = req.body;
  try {
    const updateData: any = {};
    if (email) updateData.email = email;
    if (userName) updateData.userName = userName;
    if (password) {
      const salt = await bcrypt.genSalt(10);
      updateData.password = await bcrypt.hash(password, salt);
    }

    const updatedUser = await prisma.user.update({
      where: { id },
      data: updateData,
    });

    res.status(200).json({ message: "Success", data: updatedUser });
  } catch (error) {
    res.status(500).json({ message: `Failed ${error}` });
  }
};

export const DeleteUser = async (req: any, res: any) => {
  const id = req.params.id;
  try {
    const data = await prisma.user.delete({
      where: {
        id,
      },
    });

    if (!data) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "Success" });
  } catch (error) {
    res.status(500).json({ message: `Failed ${error}` });
  }
};

export const GetAllUser = async (_req: any, res: any) => {
  try {
    const data = await prisma.user.findMany({
      select: {
        id: true,
        userName: true,
        email: true,
        role: true,
        emailVerified: true
      }
    });
    res.status(200).json({ message: "Success", data: data });
  } catch (error) {
    res.status(500).json({ message: `Failed ${error} ` });
  }
};

export const GetUserById = async (req: any, res: any) => {
  const id = req.params.id;
  try {
    const data = await prisma.user.findUnique({
      where: {
        id,
      },
    });

    if (!data) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "Success", data });
  } catch (error) {
    res.status(500).json({ message: `Failed ${error}` });
  }
};

export const VerifyOTP = async (req: any, res: any) => {
  const { email, otp } = req.body;

  try {
    // 1. Check PendingUser first (New Flow)
    const pendingUser = await prisma.pendingUser.findUnique({
      where: { email },
    });

    if (pendingUser) {
      if (new Date() > pendingUser.otpExpiresAt) {
        return res.status(400).json({ message: "OTP has expired. Please request a new one." });
      }

      if (pendingUser.otpCode !== otp) {
        return res.status(400).json({ message: "Invalid OTP" });
      }

      // Create new user from pending data
      const newUser = await prisma.user.create({
        data: {
          email: pendingUser.email,
          userName: pendingUser.userName,
          password: pendingUser.password,
          role: 'RESEARCHER',
          emailVerified: true,
        },
      });

      // Delete pending user record
      await prisma.pendingUser.delete({
        where: { id: pendingUser.id },
      });

      const token = generateToken(newUser.id, res);
      return res.status(200).json({
        message: "Email verified and account created successfully",
        data: { id: newUser.id, email: newUser.email, userName: newUser.userName, role: newUser.role },
        token: token,
      });
    }

    // 2. Check existing User (Legacy Flow for already created but unverified users)
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (user.emailVerified) {
      return res.status(400).json({ message: "Email already verified" });
    }

    if (!user.otpCode || !user.otpExpiresAt) {
      return res.status(400).json({ message: "No OTP found. Please request a new one." });
    }

    if (new Date() > user.otpExpiresAt) {
      return res.status(400).json({ message: "OTP has expired. Please request a new one." });
    }

    if (user.otpCode !== otp) {
      return res.status(400).json({ message: "Invalid OTP" });
    }

    // Update user as verified and clear OTP
    await prisma.user.update({
      where: { id: user.id },
      data: {
        emailVerified: true,
        otpCode: null,
        otpExpiresAt: null,
      },
    });

    generateToken(user.id, res);
    res.status(200).json({
      message: "Email verified successfully",
      data: { id: user.id, email: user.email, userName: user.userName, role: user.role },
    });
  } catch (error) {
    res.status(500).json({ message: `Failed ${error}` });
  }
};

export const ResendOTP = async (req: any, res: any) => {
  const { email } = req.body;

  try {
    // Generate new OTP
    const otp = generateOTP();
    const otpExpiresAt = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes

    // 1. Check PendingUser
    const pendingUser = await prisma.pendingUser.findUnique({
      where: { email },
    });

    if (pendingUser) {
      await prisma.pendingUser.update({
        where: { id: pendingUser.id },
        data: {
          otpCode: otp,
          otpExpiresAt: otpExpiresAt,
        },
      });
      // Send email
      try {
        queueOTPEmail(email, otp);
      } catch (e) { console.error(e); }

      return res.status(200).json({ message: "OTP sent successfully" });
    }

    // 2. Check existing User
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (user.emailVerified) {
      return res.status(400).json({ message: "Email already verified" });
    }

    // Update user with new OTP
    await prisma.user.update({
      where: { id: user.id },
      data: {
        otpCode: otp,
        otpExpiresAt: otpExpiresAt,
      },
    });

    // Queue OTP email (non-blocking)
    try {
      queueOTPEmail(email, otp);
    } catch (emailError) {
      console.error('Failed to queue OTP email:', emailError);
      // Continue anyway - user can request resend if needed
    }

    res.status(200).json({ message: "OTP sent successfully" });
  } catch (error) {
    res.status(500).json({ message: `Failed ${error}` });
  }
};

export const CheckAuth = async (req: any, res: any) => {
  try {
    const pendingRequest = await prisma.downloadRequest.findFirst({
      where: {
        userId: req.user.id,
        status: 'PENDING'
      }
    });

    res.status(200).json({
      message: "Success",
      data: { ...req.user, hasPendingRequest: !!pendingRequest }
    });
  } catch (error: any) {
    res.status(500).json({ message: "Internal server error" });
  }
};

export const ForgotPassword = async (req: any, res: any) => {
  const { email } = req.body;
  try {
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      // For security, don't reveal if user exists
      return res.status(200).json({ message: "If an account with that email exists, we have sent a password reset link." });
    }

    const resetToken = crypto.randomBytes(32).toString("hex");
    const resetTokenExpires = new Date(Date.now() + 3600000); // 1 hour

    await prisma.user.update({
      where: { id: user.id },
      data: {
        resetToken,
        resetTokenExpires,
      },
    });

    queuePasswordReset(email, resetToken);

    res.status(200).json({ message: "If an account with that email exists, we have sent a password reset link." });
  } catch (error) {
    res.status(500).json({ message: `Failed ${error}` });
  }
};

export const ResetPassword = async (req: any, res: any) => {
  const { token, password } = req.body;
  try {
    const user = await prisma.user.findFirst({
      where: {
        resetToken: token,
        resetTokenExpires: {
          gt: new Date(),
        },
      },
    });

    if (!user) {
      return res.status(400).json({ message: "Invalid or expired reset token" });
    }

    const salt = await bcrypt.genSalt(10);
    const encryptedPassword = await bcrypt.hash(password, salt);

    await prisma.user.update({
      where: { id: user.id },
      data: {
        password: encryptedPassword,
        resetToken: null,
        resetTokenExpires: null,
      },
    });

    res.status(200).json({ message: "Password reset successful" });
  } catch (error) {
    res.status(500).json({ message: `Failed ${error}` });
  }
};
