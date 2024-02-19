import Jwt from "jsonwebtoken";
import userModel from "../models/user/user.mjs";

export default (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization)
    return res.status(401).json({ message: "please login!", success: false });

  const Token = authorization.replace("Bearer ", "");
  Jwt.verify(Token, process.env.SECRET_KEY, async (err, payload) => {
    if (err)
      return res.status(401).json({ message: err.message, success: false });

    const { userID } = payload;
    req.user = await userModel.findById(userID);
    next();
  });
};
