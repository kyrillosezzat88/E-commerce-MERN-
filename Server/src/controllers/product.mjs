import productModel from "../models/product/product.mjs";
import categoryModel from "../models/category/category.mjs";
import { validateProduct } from "../validations/index.mjs";
import { paginationData } from "../middlewares/pagination.mjs";

export const createProduct = async (req, res, next) => {
  try {
    const { error, value } = validateProduct(req.body);
    if (error) throw new Error(error.details.map((err) => err.message));
    let newProduct = new productModel(value);
    newProduct = await newProduct.save();
    if (!newProduct) throw new Error("something went wrong please try again");
    return res.status(200).json({
      data: newProduct,
      success: true,
      message: "Product Created successfully",
    });
  } catch (error) {
    return next(error);
  }
};

//edit product
export const updateProduct = async (req, res, next) => {
  try {
    const { error, value } = validateProduct(req.body);
    const { id } = req.params;
    if (error) throw new Error(error.details.map((err) => err.message));
    let getProduct = await productModel.findOneAndUpdate({ _id: id }, value, {
      new: true,
    });
    if (!getProduct) throw new Error("something went wrong please try again");
    return res.status(200).json({
      data: getProduct,
      success: true,
      message: "Product updated successfully",
    });
  } catch (error) {
    return next(error);
  }
};

// delete Product
export const deleteProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const getProduct = await productModel.findByIdAndDelete(id, { new: true });
    if (!getProduct) throw new Error("product not found!");
    return res.status(200).json({
      data: getProduct,
      message: "product deleted successfully",
      success: true,
    });
  } catch (error) {
    return next(error);
  }
};

// get all products
// export const getAllProducts = async (req, res, next) => {
//   try {
//     const { page, limit } = req.query;
//     // const products = await productModel.find();
//     let products = await paginationData(
//       productModel,
//       Number(page),
//       Number(limit)
//     );
//     if (!products) throw new Error("something went wrong please try again");
//     return res.status(200).json({
//       data: products,
//       message: "success",
//       success: true,
//     });
//   } catch (error) {
//     return next(error);
//   }
// };

//get all products related to specified category
export const categoryProducts = async (req, res, next) => {
  try {
    const { categoryId } = req.params;
    //check category if exist or not
    const category = await categoryModel.findById(categoryId);
    if (!category) throw new Error("category not found");

    const products = await productModel.find({ category: categoryId });
    if (!products) throw new Error("something went wrong please try again");
    return res.status(200).json({
      data: products,
      message: "success",
      success: true,
    });
  } catch (error) {
    return next(error);
  }
};
