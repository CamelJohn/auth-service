import { type RequestHandler, json, urlencoded } from 'express';
import { isHttpError, NotFound } from 'http-errors';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import { type ErrorRequestHandlerExtended, type HealthCheckRequestHandler } from './interfaces';
import db from './database';

const error: ErrorRequestHandlerExtended = (err, _, res, next) => {
    const status_code = isHttpError(err) ? err.status : 500;
    const error_message = isHttpError(err) ? err.message : 'Internal Server Error';

    // TODO: add database exception filter (database error => http error)

    res.status(status_code).send({
        message: error_message,
        code: status_code,
    });
}

const health_check: HealthCheckRequestHandler = async (_, res, next) => {
    try {
        await db.$test_connection();
        res.status(200).json({
            message: 'OK',
            code: 200
        });
    } catch (error) {
        res.status(500).json({
            message: `Server Is Down. \n[Original Error]: ${error}`,
            code: 500
        });
    }
}

const catch_all: RequestHandler = (req, __, next) => {
    next(new NotFound(`could not find resource at requested path: ${req.originalUrl}`));
}

const base: RequestHandler[] = [
    urlencoded({ extended: true }),
    json(), 
    cors(),
    helmet(),
    morgan('dev'),
];

const middleware = {
    error,
    health_check,
    catch_all,
    base
};

export default middleware;
