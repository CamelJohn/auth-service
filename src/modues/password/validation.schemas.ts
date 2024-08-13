import Joi from 'joi';
import { PASSWORD_LENGTH } from '../../constants';

export const forgot_password_schema = Joi.object({
    email: Joi.string().email().required()
})

export const update_password_schema = Joi.object({
    password: Joi.string().min(PASSWORD_LENGTH).required(),
    user_id: Joi.string().required()
})
