import { type RequestHandler } from 'express';

interface UserService {
    [key: string]: RequestHandler;
}

const user_service: UserService = {
    sign_up: (user_dto) => {
        
    },
    sign_in: (user_dto) => {
        
    }
};

export default user_service;
