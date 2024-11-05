import jwt from 'jsonwebtoken';

// doctor authentication middleware
const authDoctor = async (req, res, next) => {
    try {
        // Extract token from "Authorization" header
       const{dtoken}= req.headers
        if (!dtoken) {
            return res.json({ success: false, message: "Not authorized, please login again." });
        }

        // Verify and decode the token
        const token_decode = jwt.verify(dtoken, process.env.JWT_SECRET);
        req.body.docId = token_decode.id;

        // Token is valid; proceed to the next middleware
        next();
    } catch (error) {
        console.error("Authentication error:", error)

        // Handle other errors
        res.json({ success: false, message: "Authorization failed. " + (error.message || "Invalid token") });
    }
};

export default authDoctor;
