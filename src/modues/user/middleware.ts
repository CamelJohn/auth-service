import { type RequestHandler } from 'express';
import { Conflict, Unauthorized } from 'http-errors';
import userDao from '../../database/user.dao';

interface SignInUser {
    email: string,
    password: string;
}

interface SignUpUser {
    name: string;
}

interface SignUpUserRequest extends RequestHandler<any, SignUpUser> {}
interface SignInUserRequest extends RequestHandler<any, SignInUser> {}

export const user_should_not_exist: SignUpUserRequest = async (req, res, next) => {
    try {
        const user = await userDao.findOne(req.body.email);

        if (user) {
            return next(new Conflict());
        }

        next();
    } catch (error) {
        next(error);
    }
}

export const user_should_exist: SignInUserRequest = async (req, res, next) => {
    try {
        const user = await userDao.findOne(req.body.email);

        if (!user) {
            return next(new Unauthorized());
        }

        next();
    } catch (error) {
        next(error);
    }
}