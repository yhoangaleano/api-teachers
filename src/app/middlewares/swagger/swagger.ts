 
import { Router } from 'express';
import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

import swaggerOptions from './swaggerConfig';

const specs = swaggerJsDoc( swaggerOptions );
const swaggerRouter = Router();

swaggerRouter.use( swaggerUi.serve );
swaggerRouter.get('/', swaggerUi.setup( specs ) );

export default swaggerRouter;