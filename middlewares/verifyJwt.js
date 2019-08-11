
const jwt = require("jsonwebtoken");
const jwtModule = include('modules/jwt.js');

function parseToken(req, res, next) {
  // Obtain value of header.
  const bearerHeader = req.headers["Authorization"];

  // Value is undefined
  if (typeof bearerHeader == "undefined") {
    return res.json({
      success: "fail",
      message: "token required"
    });
  }
  
  // Obtain token.
  const bearer = bearerHeader.split(" ");
  const bearerToken = bearer[1];
  let error = jwtModule.verify(bearerToken);
  if (error) {
    return res.send({
      success: "fail",
      message: error.message
    });
  }

  // Save token in req.
  req.token = bearerToken;

  next();
}

module.exports = parseToken;
