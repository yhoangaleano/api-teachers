import { TeacherRoutes } from './app/routes/TeacherRoutes';
import express from 'express';
import config from './config';

import cors from './app/middlewares/cors';
import morgan from './app/middlewares/logger-http';
import swaggerRouter from './app/middlewares/swagger/swagger';

export class Server {

    private _app: express.Application;

    constructor() {
        this._app = express();
        this.config();
        this.middlewares();
        this.routes();
    }

    private config(): void {
        this._app.set('port', config.port);
    }

    private middlewares(): void {
        this._app.use(express.json());
        this._app.use(express.urlencoded({ extended: false }));
        this._app.use(cors);
        this._app.use(morgan);
        this._app.use( '/api-docs', swaggerRouter );
    }

    private routes(): void {
        const teacherRoutes = new TeacherRoutes();
        this._app.use('/api/teachers', teacherRoutes.getRoutes());
    }

    public start(): void {
        this._app.listen(config.port, () => {
            console.log(`Server corriendo por el puerto ${config.port}`);
        });
    }

}