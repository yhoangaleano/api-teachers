/**
 * @swagger
 * components:
 *   schemas:
 *     Teacher:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           description: Nombre del profesor.
 *         description:
 *           type: string
 *           description: Descripción del profesor.
 *         email:
 *           type: string
 *           description: Correo electrónico del profesor.
 *         birthDate:
 *           type: string
 *           format: date
 *           description: Fecha de nacimiento del profesor (YYYY-MM-DD).
 *         id:
 *           type: string
 *           description: Identificador único del profesor.
 *       example:
 *         name: John Doe
 *         description: Profesor de matemáticas
 *         email: john.doe@example.com
 *         birthDate: 1980-01-01
 *         id: 123456789
 */
export class Teacher {

    constructor(

        public name: string,
        public description: string,
        public email: string,
        public birthDate: Date,
        public id?: string

    ) {

    }

} 
