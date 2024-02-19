import userModel from "../models/user/user.mjs";
import { validateUser } from "../validations/index.mjs";

// get user info
export const userInfo = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await userModel.findById(id);
    if (!user) throw new Error("user not found");
    return res.status(200).json({
      data: user,
      message: "success",
      success: true,
    });
  } catch (error) {
    return next(error);
  }
};

// edit user
export const updateUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    // we will user registerValidation here because the validation here same like register
    const { error, value } = validateUser(req.body);
    if (error) throw new Error(error.details.map((err) => err.message));
    const user = await userModel.findByIdAndUpdate(id, value, { new: true });
    if (!user) throw new Error("something went wrong! Please try again");
    return res.status(200).json({
      data: user,
      message: "user updated successfully",
      success: true,
    });
  } catch (error) {
    return next(error);
  }
};
