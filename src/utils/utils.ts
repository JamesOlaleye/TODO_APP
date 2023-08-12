import Joi from 'joi';

export const registerUserSchema = Joi.object().keys({
  email: Joi.string().trim().lowercase().required(),
  firstName: Joi.string().required(),
  password: Joi.string()
    .regex(/^[a-zA-Z0-9]{3,30}/)
    .required(),
  confirm_password: Joi.any()
    .equal(Joi.ref('password'))
    .required()
    .label('Confirm password')
    .messages({ 'any.only': '{#label} does not match' }),
  phoneNumber: Joi.string().required(),
});

export const options = {
  abortEarly: false,
  errors: {
    wrap: {
      label: '',
    },
  },
};