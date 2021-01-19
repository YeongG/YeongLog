const crypto = require("crypto");

const checkIncludeEmpty = (data) => {
  for (let i in data) {
    if (!data[i]) throw new Error(`Bad Request`);
  }
  return false;
};

const hashPassword = (password) => {
  return crypto.createHash("sha512").update(password).digest("base64");
};

module.exports = {
  checkIncludeEmpty,
  hashPassword,
};
