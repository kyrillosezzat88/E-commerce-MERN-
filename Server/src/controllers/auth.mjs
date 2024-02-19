import userModel from "../models/user/user.mjs";
import { validateLogin, validateRegister } from "../validations/index.mjs";
import bcrypt from "bcrypt";
import Jwt from "jsonwebtoken";

//login controller
export const login = async (req, res , next) => {
  try {
    const { error, value } = validateLogin(req.body);
    if (error) throw new Error(error.details.map((err) => err.message));
    const getUser = await userModel.findOne({ email: value.email });
    if (getUser && bcrypt.compareSync(value.password, getUser.password)) {
      const token = Jwt.sign(
        { userID: getUser._id, isAdmin: getUser.isAdmin },
        process.env.SECRET_KEY,
        { expiresIn: "1d" }
      );
      // delete password from user object what send it to frontend
      delete getUser._doc.password;
      return res.status(200).json({
        user: { ...getUser._doc, token },
        message: "Loged in succssfully",
        success: true,
      });
    }

    throw new Error("email or password wrong");
  } catch (error) {
    return next(error);
  }
};

// register controller
export const register = async (req, res, next) => {
  try {
    const { error, value } = validateRegister(req.body);
    //check user valid or not
    if (error) {
      throw new Error(error.details.map((err) => err.message));
    }
    //check user if already registered
    const getUser = await userModel.findOne({ email: value.email });
    if (getUser) throw new Error("this email already registered!");

    //hash password
    const hashPassword = bcrypt.hashSync(value.password, 10);
    // create a new user
    let newUser = new userModel({
      ...value,
      password: hashPassword,
    });
    newUser = await newUser.save();
    // check if user saved or not
    if (!newUser) throw new Error("something went wrong please try again !");
    return res.status(200).json({
      message: "account created successfully",
      success: true,
    });
  } catch (error) {
    return next(error);
  }
};


// reset password
// TODO: reset password
