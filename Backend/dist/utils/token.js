import jwt from "jsonwebtoken";
export const generateToken = (userId, res) => {
    if (!process.env.JWT_SECRET) {
        throw new Error("JWT_SECRET not configured");
    }
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: "3d",
    });
    res.cookie("jwt", token, {
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        sameSite: "lax",
        secure: process.env.NODE_ENV !== "development",
        path: "/",
    });
    return token;
};
//# sourceMappingURL=token.js.map