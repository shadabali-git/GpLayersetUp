const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const hashPassword = async (password) => {
  return await bcrypt.hash(password, 10);
};

const comparePasswords = async (password, hash) => {
  return await bcrypt.compare(password, hash);
};

const generateToken = (user) => {
  return jwt.sign(
    {
      email: user.email,
      id: user._id,
    },
    "secret",
    {
      expiresIn: "1h",
    }
  );
};

const verifyToken = (token) => {
  return jwt.verify(token, "secret");
};

module.exports = {
  hashPassword,
  comparePasswords,
  generateToken,
  verifyToken,
};