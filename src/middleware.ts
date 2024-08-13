import { type RequestHandler, json, urlencoded } from 'express';
import { isHttpError, NotFound } from 'http-errors';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import { type ErrorRequestHandlerExtended, type HealthCheckRequestHandler } from './interfaces';

const error: ErrorRequestHandlerExtended = (err, _, res, next) => {
    const status_code = isHttpError(err) ? err.status : 500;
    const error_message = isHttpError(err) ? err.message : 'Internal Server Error';

    // TODO: add database exception filter (database error => http error)

    res.status(status_code).send({
        message: error_message,
        code: status_code,
    });
}

const health_check: HealthCheckRequestHandler = (_, res, next) => {
    res.status(200).json({
        message: 'OK',
        code: 200
    });
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
