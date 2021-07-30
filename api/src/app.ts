import * as express from 'express';
import { Application } from 'express';
import swaggerDocument from './swagger';
var cookieSession = require('cookie-session')
const swaggerUi = require('swagger-ui-express');
var cors = require('cors');


class App {
    public app: Application
    public port: number

    constructor(appInit: { port: number; middleWares: any; controllers: any; }) {
        this.app = express()
        this.port = appInit.port

        this.app.use(cookieSession({
            name: 'session',
            keys: ['keyi'],

            // Cookie Options
            maxAge: 24 * 60 * 60 * 1000 // 24 hours
        }))

        this.app.use(cors({
            origin: 'http://localhost:3000',
            credentials: true
        }));


        this.middlewares(appInit.middleWares)
        this.routes(appInit.controllers)
        this.assets()
        this.template()
    }

    private middlewares(middleWares: { forEach: (arg0: (middleWare: any) => void) => void; }) {
        middleWares.forEach(middleWare => {
            this.app.use(middleWare)
        })
    }

    private routes(controllers: { forEach: (arg0: (controller: any) => void) => void; }) {
        controllers.forEach(controller => {
            this.app.use('/v1', controller.router)
        })

        this.app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


    }

    private assets() {
        this.app.use(express.static('public'))
        this.app.use(express.static('views'))
    }

    private template() {
        this.app.set('view engine', 'pug')
    }

    public listen() {
        this.app.listen(this.port, () => {
            console.log(`App listening on the http://localhost:${this.port}`)
        })
    }
}

export default App