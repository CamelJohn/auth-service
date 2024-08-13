import { Router } from 'express';

const password_routes = Router();

password_routes.get('/forgot-my-password');

export default password_routes;