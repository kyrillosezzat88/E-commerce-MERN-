import Joi from "joi";

export const productValidation = Joi.object({
  name: Joi.string().required().messages({
    "string.empty": "please enter product name",
    "any.required": "product name required!",
  }),
  description: Joi.string().required().messages({
    "string.empty": "please enter product description",
    "any.required": "product description required!",
  }),
  mainImage: Joi.string().required().messages({
    "string.empty": "please enter product mainImage",
    "any.required": "product mainImage required!",
  }),
  category: Joi.string().required().messages({
    "string.empty": "please enter product category",
    "any.required": "product category required!",
  }),
  basePrice: Joi.number().required().min(1).messages({
    "number.empty": "please enter product basePrice",
  }),
  sellPrice: Joi.number().required().min(1).messages({
    "number.empty": "please enter product sellPrice",
  }),
  Stock: Joi.number().required().min(1).messages({
    "number.empty": "please enter product Stock",
  }),
});
