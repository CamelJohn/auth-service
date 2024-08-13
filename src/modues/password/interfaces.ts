import { type RequestHandler } from 'express';

export interface PasswordRequest {
    email: string;
}

export interface UpdatePasswordRequest {
    password: string;
    user_id: string;
}

export interface PasswordController {
    forgot: RequestHandler<any, any, PasswordRequest>;
    update: RequestHandler<any, any, UpdatePasswordRequest>;
}


export interface CompareInputs {
    clear_text: string;
    hashed: string;
}
