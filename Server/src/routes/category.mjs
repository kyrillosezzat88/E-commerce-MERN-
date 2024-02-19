import { Router } from "express";
import AdminRules from "../middlewares/adminJWT.mjs";
import {
  createCategory,
  deletedCategory,
  getCategories,
  updatedCategory,
} from "../controllers/category.mjs";

const categoryRoutes = Router();
//get all categories
categoryRoutes.get("/", getCategories);

// create a new category
categoryRoutes.post("/create", AdminRules, createCategory);

// update category
categoryRoutes.patch("/:id", AdminRules, updatedCategory);

//delete category
categoryRoutes.delete("/:id", AdminRules, deletedCategory);

export default categoryRoutes;
