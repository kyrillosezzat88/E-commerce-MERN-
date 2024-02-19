import Joi from "joi";

const categoryValidation = Joi.object({
  name: Joi.string().required().messages({
    "string.empty": "category name required!",
  }),
  image: Joi.string().required().messages({
    "string.empty": "category image required!",
  }),
});

export default categoryValidation;
