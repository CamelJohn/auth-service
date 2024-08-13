import express from 'express';
import middleware from './middleware';
import main_routes from './main.routes';

const app = express();

app.use(middleware.base);
app.get('/health-check', middleware.health_check);
app.use('/api/v1', main_routes)
app.use('*', middleware.catch_all);
app.use(middleware.error);

export default app;
