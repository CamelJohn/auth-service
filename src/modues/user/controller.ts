import { type RequestHandler } from 'express';

interface UserController {
    [key: string]: RequestHandler;
}

const user_controller: UserController = {
    sign_up: (req, res, next) => {
        
    },
    sign_in: (req, res, next) => {
        
    }
};

export default user_controller;
