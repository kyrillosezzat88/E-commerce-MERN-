import Jwt from "jsonwebtoken";
import user from "../models/user/user.mjs";

export default (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization)
    return res.status(401).json({ message: "please login!", success: false });

  const Token = authorization.replace("Bearer ", "");
  Jwt.verify(Token, process.env.SECRET_KEY, async (err, payload) => {
    if (err)
      return res.status(401).json({ message: err.message, success: false });
    const { userID, isAdmin } = payload;
    if (!isAdmin)
      return res
        .status(402)
        .json({ message: "you are not allowed here", success: false });
    req.user = await user.findById(userID);
    next();
  });
};
