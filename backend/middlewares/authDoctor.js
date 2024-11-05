import jwt from 'jsonwebtoken';

// Doctor authentication middleware
const authDoctor = async (req, res, next) => {
    try {
        // Extract token from "Authorization" header
        const authHeader = req.headers['authorization'];
        if (!authHeader) {
            return res.status(401).json({ success: false, message: "Authorization header missing. Please log in." });
        }

        const dtoken = authHeader.split(' ')[1]; // Split to get the token after 'Bearer'
        
        if (!dtoken) {
            return res.status(401).json({ success: false, message: "Token missing in the authorization header. Please log in again." });
        }

        // Verify and decode the token
        const token_decode = jwt.verify(dtoken, process.env.JWT_SECRET);
        req.body.docId = token_decode.id; // Attach doctor ID to request body for downstream use

        // Token is valid; proceed to the next middleware
        next();
    } catch (error) {
        console.error("Authentication error:", error);

        if (error.name === "TokenExpiredError") {
            // Handle token expiration specifically
            return res.status(401).json({ success: false, message: "Session expired. Please log in again." });
        }

        // Handle other errors
        res.status(401).json({ success: false, message: "Authorization failed. " + (error.message || "Invalid token") });
    }
};

export default authDoctor;
