//The middleware intersects the endpoint receiving the request

import jwt from "jsonwebtoken";

function authMiddleware(req, res, next) {
  const token = req.headers["authorization"];

  if (!token) {
    return res.status(401).json({
      message: "Token not provided",
    });
  }

  //We verify the token coincides with the token from the user login
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({
        message: "Unauthorized - Invalid token",
      });
    }

    //when we constructed the token, the first parameter was the id. Here we try to decode the id from the jwt token
    req.userId = decoded.id;

    next(); //Carry on to the endpoint
  });
}

export default authMiddleware;
