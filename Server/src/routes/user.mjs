import { Router } from "express";
import AdminRules from "../middlewares/adminJWT.mjs";
import userRules from "../middlewares/userJWT.mjs";
import { paginationData } from "../middlewares/pagination.mjs";
import userModel from "../models/user/user.mjs";
import { updateUser, userInfo } from "../controllers/user.mjs";

const userRoutes = Router();

// get all users
userRoutes.get("/", AdminRules, paginationData(userModel));

//get user info
userRoutes.get("/:id", userRules, userInfo);

//update user info
userRoutes.patch("/:id", userRules, updateUser);

export default userRoutes;
