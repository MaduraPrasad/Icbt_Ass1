const JWT = require("jsonwebtoken");

module.exports = async (req, res, next) => {
  try {
    const token2 = req.headers["authorization"].split(" ")[1];
    JWT.verify(token2, process.env.JWT_SECRET2, (err, decode) => {
      if (err) {
        return res.status(200).send({
          message: "Auth Fialed",
          success: false,
        });
      } else {
        req.body.jobseekerId = decode.id;
        next();
      }
    });
  } catch (error) {
    console.log(error);
    res.status(401).send({
      message: "Auth Failed",
      success: false,
    });
  }
};
