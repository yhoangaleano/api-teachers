import { TeacherController } from './../controllers/TeacherController';
import { TeacherRepository } from './../../infra/repositories/TeacherRepository';
import { Router } from "express";


export class TeacherRoutes {

    private _router: Router;
    private _teacherRepository: TeacherRepository;
    private _teacherController: TeacherController;

    constructor() {
        this._router = Router();
        this._teacherRepository = new TeacherRepository();
        this._teacherController = new TeacherController(this._teacherRepository);
        this.initRoutes();
    }

    private initRoutes(): void {
        this._router.post('/create', this._teacherController.create.bind(this._teacherController) );
    }

    public getRoutes(): Router {
        return this._router;
    }

}