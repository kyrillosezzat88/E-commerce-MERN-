import Joi from "joi";

export const loginValidation = Joi.object({
  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net"] },
    })
    .required()
    .messages({
      "string.empty": "please enter your email",
      "any.required": "email required",
    }),
  password: Joi.string().min(6).required().messages({
    "string.empty": "please enter your password",
    "any.required": "password required",
  }),
});

export const registerValidation = Joi.object({
  fullName: Joi.string().required().min(3).messages({
    "string.empty": "please enter your full name",
    "any.required": "full name required",
    "any.min": "please enter at lest 3 characters",
  }),
  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net"] },
    })
    .required()
    .messages({
      "string.empty": "please enter your email",
      "any.required": "email required",
    }),
  password: Joi.string().min(6).required().messages({
    "string.empty": "please enter your password",
    "any.required": "password required",
  }),
  confirmPassword: Joi.string()
    .valid(Joi.ref("password"))
    .required()
    .strict()
    .messages({ "any.only": "Passwords do not match" }),
});

export const userValidation = Joi.object({
  fullName: Joi.string().required().min(3).messages({
    "string.empty": "please enter your full name",
    "any.required": "full name required",
    "any.min": "please enter at lest 3 characters",
  }),
  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net"] },
    })
    .required()
    .messages({
      "string.empty": "please enter your email",
      "any.required": "email required",
    }),
});
