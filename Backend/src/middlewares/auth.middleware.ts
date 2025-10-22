import jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const Protected = async (req: any, res: any, next: any) => {
  try {
    const token = req.cookies?.jwt;
    if (!token) {
      return res
        .status(401)
        .json({ message: "Unauthorized - No Token Provided" });
    }

    if (!process.env.JWT_SECRET) {
      throw Error("no jwt secret provided");
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET) as {
      userId: string;
    };
    if (!decoded) {
      return res.status(401).json({ message: "Unauthorized - Invalid Token" });
    }
    console.log(decoded);

    const user = await prisma.user.findUnique({
      where: {
        id: decoded.userId,
      },
    });

    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    req.user = user;
    next();
  } catch (error) {
    console.error("Auth error:", error);
    return res.status(401).json({
      message: "Unauthorized - Invalid Token",
      error: error instanceof Error ? error.message : String(error),
    });
  }
};

export const RequireEditor = (req: any, res: any, next: any) => {
  try {
    if (!req.user) return res.status(401).json({ message: "Unauthorized" });
    if (req.user.role !== 'EDITOR') {
      return res.status(403).json({ message: 'Forbidden - Editor role required' });
    }
    next();
  } catch (e) {
    return res.status(403).json({ message: 'Forbidden' });
  }
};
