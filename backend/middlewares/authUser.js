import jwt from 'jsonwebtoken';

// user authentication middleware
const authUser = async (req, res, next) => {
    try {
        // Extract token from "Authorization" header
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1]; // Split to get the token after 'Bearer'

        if (!token) {
            return res.json({ success: false, message: "Not authorized, please login again." });
        }

        // Verify and decode the token
        const token_decode = jwt.verify(token, process.env.JWT_SECRET);
        req.body.userId = token_decode.id;

        // Token is valid; proceed to the next middleware
        next();
    } catch (error) {
        console.error("Authentication error:", error);
        res.json({ success: false, message: "Authorization failed. " + (error.message || "Invalid token") });
    }
};

export default authUser;
