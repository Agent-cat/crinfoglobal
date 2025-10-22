import { PrismaClient } from "@prisma/client";

import bcrypt from "bcryptjs";
import { generateToken } from "../utils/token.js";
import { generateOTP, sendOTPEmail } from "../services/email.service.js";
const prisma = new PrismaClient();

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

    generateToken(user.id, res);
    res.status(200).json({
      message: "Success",
      data: { id: user.id, email: user.email, userName: user.userName, role: user.role },
    });
  } catch (error) {
    res.status(500).json({ message: `Failed ${error}` });
  }
};

export const Signup = async (req: any, res: any) => {
  const { email, userName, password } = req.body;

  const existingUser = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });

  if (existingUser) {
    return res
      .status(400)
      .json({ message: "User with this email already exists" });
  }

  try {
    const salt = await bcrypt.genSalt(10);
    const encryptedPassword = await bcrypt.hash(password, salt);
    
    // Generate OTP and set expiration (10 minutes from now)
    const otp = generateOTP();
    const otpExpiresAt = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes
    
    const user = await prisma.user.create({
      data: { 
        email, 
        password: encryptedPassword, 
        userName, 
        role: 'RESEARCHER',
        emailVerified: false,
        otpCode: otp,
        otpExpiresAt: otpExpiresAt
      },
    });

    // Send OTP email
    const emailSent = await sendOTPEmail(email, otp);
    if (!emailSent) {
      return res.status(500).json({ message: "Failed to send verification email" });
    }

    res.status(200).json({ 
      message: "User created successfully. Please check your email for verification code.",
      data: { id: user.id, email: user.email, userName: user.userName }
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
      secure: process.env.NODE_ENV !== "development",
      path: "/",
      expires: new Date(0),
    });
    res.json({
      message: "user loged out",
    });
  } catch (error: any) {
    console.log(`Error in logout controller ${error.message}`);
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
    const data = await prisma.user.findMany();
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
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (user.emailVerified) {
      return res.status(400).json({ message: "Email already verified" });
    }

    // Generate new OTP
    const otp = generateOTP();
    const otpExpiresAt = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes

    // Update user with new OTP
    await prisma.user.update({
      where: { id: user.id },
      data: {
        otpCode: otp,
        otpExpiresAt: otpExpiresAt,
      },
    });

    // Send OTP email
    const emailSent = await sendOTPEmail(email, otp);
    if (!emailSent) {
      return res.status(500).json({ message: "Failed to send verification email" });
    }

    res.status(200).json({ message: "OTP sent successfully" });
  } catch (error) {
    res.status(500).json({ message: `Failed ${error}` });
  }
};

export const CheckAuth = async (req: any, res: any) => {
  try {
    res.status(200).json(req.user);
  } catch (error: any) {
    console.log(`Error in checkAuth controller ${error.message}`);
    res.status(500).json({ message: "Internal server error" });
  }
};
