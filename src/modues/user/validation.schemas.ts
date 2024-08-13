import Joi from 'joi';
import { PASSWORD_LENGTH } from '../../constants';

export const sign_in_request_schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(PASSWORD_LENGTH).required(),
});

export const sign_up_request_schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(PASSWORD_LENGTH).required(),
    name: Joi.string().required(),
});