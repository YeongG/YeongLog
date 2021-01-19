const { checkIncludeEmpty } = require("../lib/utils");

const checkBodyMiddleware = (keys) => (req, res, next) => {
  const datas = keys.map((key) => req.body[key]);
  try {
    checkIncludeEmpty(datas);
    next();
  } catch (err) {
    res.status(400).json({ message: "Bad Request" });
  }
};

module.exports = checkBodyMiddleware;
