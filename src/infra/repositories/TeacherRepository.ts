import { PrismaClient } from '@prisma/client';

import { Teacher } from './../../domain/entities/Teacher';
import { ITeacherRepository } from './../../domain/interfaces/ITeacherRepository';

export class TeacherRepository implements ITeacherRepository {

    private _prisma: PrismaClient;

    constructor() {
        this._prisma = new PrismaClient();
    }

    public create(teacher: Teacher): Promise<Teacher> {
        return this._prisma.teacher.create({ data: teacher });
    }

}