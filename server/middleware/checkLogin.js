const { decodeJwt } = require("../lib/utils");

const checkLoginMiddleware = async (req, res, next) => {
  const token = req.headers.authorization;
  try {
    const data = decodeJwt(token);
    req.app.set("JWT_DATA", data);
    next();
  } catch (err) {
    res.status(409).json({ message: "Token X" });
  }
};

module.exports = checkLoginMiddleware;
