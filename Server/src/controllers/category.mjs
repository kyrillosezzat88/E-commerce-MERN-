import categoryModel from "../models/category/category.mjs";
import { validateCategory } from "../validations/index.mjs";

export const createCategory = async (req, res, next) => {
  try {
    const { error, value } = validateCategory(req.body);
    if (error) throw new Error(error.details.map((err) => err.message));
    //check category exist or not by name
    let getCategory = await categoryModel.findOne({ name: value.name });
    if (getCategory) throw new Error("category exists");
    let newCategory = new categoryModel(value);
    newCategory = await newCategory.save();
    return res.status(200).json({
      data: newCategory,
      message: "category Created successfully",
      success: true,
    });
  } catch (error) {
    return next(error);
  }
};

// get all categories
export const getCategories = async (req, res, next) => {
  try {
    const categories = await categoryModel.find();
    if (!categories) throw new Error("something went wrong please try again!");
    return res.status(200).json({
      data: categories,
      message: "success",
      success: true,
    });
  } catch (error) {
    return next(error);
  }
};

//edit category
export const updatedCategory = async (req, res, next) => {
  try {
    const { error, value } = validateCategory(req.body);
    const { id } = req.params;
    if (error) throw new Error(error.details.map((err) => err.message));
    const updatedCategory = await categoryModel.findByIdAndUpdate(id, value, {
      new: true,
    });
    if (!updatedCategory)
      throw new Error("Something went wrong please try again!");
    return res.status(200).json({
      data: updatedCategory,
      message: "category updated successfully",
      success: true,
    });
  } catch (error) {
    return next(error);
  }
};

// Delete category
export const deletedCategory = async (req, res, next) => {
  try {
    const { id } = req.params;
    const category = await categoryModel.findByIdAndDelete(id, { new: true });
    if (!category) throw new Error("Something went wrong please try again!");
    return res.status(200).json({
      data: category,
      message: "category Deleted successfully",
      success: true,
    });
  } catch (error) {
    return next(error);
  }
};
