import {
  loginValidation,
  registerValidation,
  userValidation,
} from "./auth.mjs";
import categoryValidation from "./category.mjs";
import { productValidation } from "./product.mjs";

const validator = (schema) => (payload) =>
  schema.validate(payload, { abortEarly: false });

export const validateLogin = validator(loginValidation);
export const validateRegister = validator(registerValidation);
export const validateProduct = validator(productValidation);
export const validateCategory = validator(categoryValidation);
export const validateUser = validator(userValidation);
