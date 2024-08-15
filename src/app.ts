import express from 'express';
import middleware from './middleware';
import main_routes from './main.routes';
import db from './database';

const app = express();

(async () => {
    try {
        await db.$connect();
        app.use(middleware.base);
        app.get('/health-check', middleware.health_check);
        app.use('/api/v1', main_routes);
        app.use('*', middleware.catch_all);
        app.use(middleware.error);
    } catch (error) {
        await db.$disconnect();
        // TODO: add winston logger here
        console.error(error);
    }
})();

export default app;
