import jwt from 'jsonwebtoken';

// Admin authentication middleware
const authAdmin = async (req, res, next) => {
    try {
        // Extract token from "Authorization" header
        const authHeader = req.headers.authorization;
        const token = authHeader && authHeader.startsWith('Bearer ') ? authHeader.split(' ')[1] : null;

        if (!token) {
            return res.json({ success: false, message: "Not authorized, please login again." });
        }

        // Verify and decode the token
        const token_decode = jwt.verify(token, process.env.JWT_SECRET);

        // Check if decoded token email matches the admin email
        if (token_decode.email !== process.env.ADMIN_EMAIL) {
            return res.json({ success: false, message: "Not authorized, please login again." });
        }

        // Token is valid; proceed to the next middleware
        next();
    } catch (error) {
        console.error("Authentication error:", error);
        res.json({ success: false, message: "Authorization failed. " + (error.message || "Invalid token") });
    }
};

export default authAdmin;
