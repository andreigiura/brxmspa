import App from './app'

import * as bodyParser from 'body-parser';
import loggerMiddleware from './middleware/logger';


import ClaculatorController from './controllers/calculator.controller'
import CompareController from './controllers/compare.controller';
import AuthController from './controllers/auth.controller';


const app = new App({
    port: 5000,
    controllers: [
        new ClaculatorController(),
        new CompareController(),
        new AuthController()
    ],
    middleWares: [
        bodyParser.json(),
        bodyParser.urlencoded({ extended: true }),
        loggerMiddleware
    ]
});

app.listen()