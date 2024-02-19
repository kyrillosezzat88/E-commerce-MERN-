import productModel from "../models/product/product.mjs";
import { Router } from "express";
import AdminRule from "../middlewares/adminJWT.mjs";
import {
  categoryProducts,
  createProduct,
  deleteProduct,
  updateProduct,
} from "../controllers/product.mjs";
import { paginationData } from "../middlewares/pagination.mjs";

const productRoutes = Router();

productRoutes.get("/", paginationData(productModel));
productRoutes.post("/create", AdminRule, createProduct);
productRoutes.delete("/:id", AdminRule, deleteProduct);
productRoutes.patch("/:id", AdminRule, updateProduct);
productRoutes.get("/category/:categoryId", categoryProducts);

export default productRoutes;
