import jwt from "jsonwebtoken";
import prisma from "../utils/prisma.js";
export const Protected = async (req, res, next) => {
    try {
        // Try to get token from cookie first, then from Authorization header
        let token = req.cookies?.jwt;
        if (!token) {
            const authHeader = req.headers.authorization;
            if (authHeader && authHeader.startsWith('Bearer ')) {
                token = authHeader.substring(7);
            }
        }
        if (!token) {
            return res
                .status(401)
                .json({ message: "Unauthorized - No Token Provided" });
        }
        if (!process.env.JWT_SECRET) {
            throw Error("no jwt secret provided");
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if (!decoded) {
            return res.status(401).json({ message: "Unauthorized - Invalid Token" });
        }
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
    }
    catch (error) {
        console.error("Auth error:", error);
        return res.status(401).json({
            message: "Unauthorized - Invalid Token",
            error: error instanceof Error ? error.message : String(error),
        });
    }
};
export const RequireEditor = (req, res, next) => {
    try {
        if (!req.user)
            return res.status(401).json({ message: "Unauthorized" });
        if (req.user.role !== 'EDITOR') {
            return res.status(403).json({ message: 'Forbidden - Editor role required' });
        }
        next();
    }
    catch (e) {
        return res.status(403).json({ message: 'Forbidden' });
    }
};
//# sourceMappingURL=auth.middleware.js.map