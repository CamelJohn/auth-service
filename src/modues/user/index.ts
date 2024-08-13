import { Router } from 'express';
import user_controller from './controller';
import validate from './validation.middleware';
import { user_should_exist, user_should_not_exist } from './middleware';

const user_routes = Router();

user_routes.post(
    '/sign-up',
    validate.sign_up_request,
    user_should_not_exist, 
    user_controller.sign_up
);

user_routes.post(
    '/sign-in',
    validate.sign_in_request,
    user_should_exist,
    user_controller.sign_in
);

export default user_routes;