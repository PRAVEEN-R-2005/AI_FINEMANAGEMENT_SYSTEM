const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
    const authHeader = req.headers.authorization || req.headers.Authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({
            message: "Unauthorized"
        });
    }

    const token = authHeader.split(" ")[1];

    if (!token) {
        return res.status(401).json({
            message: "Unauthorized"
        });
    }

    try {
        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET || "mysecretkey"
        );

        req.user = decoded;
        next();
    } catch (error) {
        console.log("Token verification failed:", error.message);
        return res.status(403).json({
            message: "Forbidden"
        });
    }
};

module.exports = verifyToken;

