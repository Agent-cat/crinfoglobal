import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import { generateToken } from "../utils/token.js";
const prisma = new PrismaClient();
export const Signin = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await prisma.user.findUnique({
            where: { email },
        });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: "Invalid credentials" });
        }
        generateToken(user.id, res);
        res.status(200).json({
            message: "Success",
            data: { id: user.id, email: user.email, userName: user.userName },
        });
    }
    catch (error) {
        res.status(500).json({ message: `Failed ${error}` });
    }
};
export const Signup = async (req, res) => {
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
        const user = await prisma.user.create({
            data: { email, password: encryptedPassword, userName },
        });
        generateToken(user.id, res);
        res.status(200).json({ message: "Success", data: user });
    }
    catch (error) {
        res.status(500).json({ message: `Failed ${error} ` });
    }
};
export const Logout = async (req, res) => {
    try {
        res.cookie("jwt", "", { maxAge: 0 });
        res.json({
            message: "user loged out",
        });
    }
    catch (error) {
        console.log(`Error in logout controller ${error.message}`);
        res.status(500).json({ message: "Internal server error" });
    }
};
export const UpdateUser = async (req, res) => {
    const id = req.params.id;
    const { email, userName, password } = req.body;
    try {
        const updateData = {};
        if (email)
            updateData.email = email;
        if (userName)
            updateData.userName = userName;
        if (password) {
            const salt = await bcrypt.genSalt(10);
            updateData.password = await bcrypt.hash(password, salt);
        }
        const updatedUser = await prisma.user.update({
            where: { id },
            data: updateData,
        });
        res.status(200).json({ message: "Success", data: updatedUser });
    }
    catch (error) {
        res.status(500).json({ message: `Failed ${error}` });
    }
};
export const DeleteUser = async (req, res) => {
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
    }
    catch (error) {
        res.status(500).json({ message: `Failed ${error}` });
    }
};
export const GetAllUser = async (_req, res) => {
    try {
        const data = await prisma.user.findMany();
        res.status(200).json({ message: "Success", data: data });
    }
    catch (error) {
        res.status(500).json({ message: `Failed ${error} ` });
    }
};
export const GetUserById = async (req, res) => {
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
    }
    catch (error) {
        res.status(500).json({ message: `Failed ${error}` });
    }
};
export const CheckAuth = async (req, res) => {
    try {
        res.status(200).json(req.user);
    }
    catch (error) {
        console.log(`Error in checkAuth controller ${error.message}`);
        res.status(500).json({ message: "Internal server error" });
    }
};
//# sourceMappingURL=user.controller.js.map