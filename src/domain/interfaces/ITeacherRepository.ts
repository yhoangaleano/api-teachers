import { Teacher } from './../entities/Teacher';
 
export interface ITeacherRepository {

    create(teacher: Teacher): Promise<Teacher>;

}