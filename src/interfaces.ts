import { type ErrorRequestHandler, type RequestHandler } from 'express';

export interface GeneralResponseFormat {
    message: string;
    code: number;
}

export interface HealthCheckRequestHandler extends RequestHandler<any, GeneralResponseFormat> {}

export interface ErrorRequestHandlerExtended extends ErrorRequestHandler<any, GeneralResponseFormat> {}