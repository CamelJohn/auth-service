import { Router } from 'express';
import user_routes from './modues/user';
import token_routes from './modues/token';
import password_routes from './modues/password';

const main_routes = Router();

main_routes.use('/users', user_routes);
main_routes.use('/tokens', token_routes);
main_routes.use('/passwords', password_routes);

export default main_routes;