const crypto = require("crypto");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const checkIncludeEmpty = (data) => {
  for (let i in data) {
    if (!data[i]) throw new Error(`Bad Request`);
  }
  return false;
};

const hashPassword = (password) => {
  return crypto.createHash("sha512").update(password).digest("base64");
};

const makeEmailJWT = (data) => {
  return jwt.sign(data, process.env.JWT_KEY, {
    expiresIn: "10m",
  });
};

const makeAccessJWT = (data) => {
  return jwt.sign(data, process.env.JWT_KEY, {
    expiresIn: "1d",
  });
};

const decodeJwt = (token) => {
  try {
    return jwt.verify(token, process.env.JWT_KEY);
  } catch (err) {
    throw new Error("Decode fail");
  }
};

module.exports = {
  checkIncludeEmpty,
  hashPassword,
  decodeJwt,
  makeEmailJWT,
  makeAccessJWT,
};
