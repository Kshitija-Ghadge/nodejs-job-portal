import JWT from "jsonwebtoken";

const userAuth = (req, res, next) => {
  const authHeader = req.headers.authorization;

  // Validate header format
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ error: "Authentication Failed" });
  }

  // Extract token correctly
  const token = authHeader.split(" ")[1];
  if (!token) {
    return res.status(401).json({ error: "Authentication Failed" });
  }

  try {
    // Verify JWT
    const payload = JWT.verify(token, process.env.JWT_SECRET);
    req.user = { userId: payload.userId };
    next();
  } catch (error) {
    return res.status(401).json({ error: "Authentication Failed" });
  }
};

export default userAuth;
