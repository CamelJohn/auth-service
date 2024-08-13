import { type RequestHandler } from 'express';
import { sign_in_request_schema, sign_up_request_schema } from './validation.schemas';
import { BadRequest } from 'http-errors';

export const sign_up_request: RequestHandler = (req, res, next) => {
    const is_valid = sign_up_request_schema.validate(req.body);

    if (is_valid.error) {
        return next(new BadRequest(is_valid.error.message));
    }

    next();
};

export const sign_in_request: RequestHandler = (req, res, next) => {
    const is_valid = sign_in_request_schema.validate(req.body);

    if (is_valid.error) {
        return next(new BadRequest(is_valid.error.message));
    }

    next();
};

const validate = {
    sign_up_request,
    sign_in_request,
}

export default validate;
