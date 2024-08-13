import { Router } from 'express';
import user_controller from './controller';
import validate from './validation.middleware';
import { user_does_not_exist, user_exists } from './middleware';

const user_routes = Router();

user_routes.post(
    '/sign-up',
    validate.sign_up_request,
    user_exists, 
    user_controller.sign_up
);

user_routes.post(
    '/sign-in',
    validate.sign_in_request,
    user_does_not_exist,
    user_controller.sign_in
);

export default user_routes;