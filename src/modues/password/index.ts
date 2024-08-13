import { Router } from 'express';
import validate from './validation.middleware';
import password_controller from './controller';

const password_routes = Router();

password_routes.post(
    '/forgot-my-password',
    validate.forgot_password_request,
    password_controller.forgot
);

password_routes.patch(
    '', 
    validate.update_password_request,
    password_controller.update
);

export default password_routes;
