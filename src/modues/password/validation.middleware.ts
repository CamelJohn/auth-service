import { type RequestHandler } from 'express';
import { BadRequest} from 'http-errors';
import { forgot_password_schema, update_password_schema } from './validation.schemas';

export const forgot_password_request: RequestHandler = (req, res, next) => {
    const is_valid = forgot_password_schema.validate(req.body);

    if (is_valid.error) {
        return next(new BadRequest(is_valid.error.message));
    }

    next();
};

export const update_password_request: RequestHandler = (req, res, next) => {
    const is_valid = update_password_schema.validate(req.body);

    if (is_valid.error) {
        return next(new BadRequest(is_valid.error.message));
    }

    next();
};

const validate = {
    forgot_password_request,
    update_password_request
};

export default validate;
