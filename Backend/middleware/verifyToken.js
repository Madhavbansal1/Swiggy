const verifyToken = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];
    
    if (!token) {
        return res.status(401).json({ message: "Access denied, no token provided" });
    }
    
    try {
        const decoded = json.verify(token, "00000");
        req.user = decoded; // Attach user info to request object
        next(); // Proceed to the next middleware or route handler
    } catch (error) {
        console.error("Token verification error:", error);
        return res.status(403).json({ message: "Invalid token" });
    }
}