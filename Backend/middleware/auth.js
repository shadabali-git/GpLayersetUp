const encryptionUtils =require("../utils/encryption.utils");

const verifyUser = async (req, res, next) => {
    try {
      const token = req.headers.authorization.split(" ")[1];
      const decoded = encryptionUtils.verifyToken(token);
      req.user = decoded;
      next();
    } catch (error) {
      return res.status(401).json({
        message: "Authentication failed",
      });
    }
  };
  
  module.exports = verifyUser;