import http from 'node:http';
import app from './app';

const http_server = http.createServer(app);

http_server.listen(8080, () => console.info('Listening on port ', 8080));