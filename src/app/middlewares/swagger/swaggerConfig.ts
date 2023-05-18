 
import { Options, SwaggerDefinition } from 'swagger-jsdoc';

const swaggerDefinition: SwaggerDefinition = {
    openapi: '3.0.0',
    info: {
        version: '1.0.0', // Semantic version
        title: 'API de profesores usando TS para la universidad UPB',
        description: 'En esta API se pueden crear nuevos profesores para tener un listado de toda la universidad'
    },
    servers: [
        {
            url: 'http://localhost:3000/api'
        }
    ]
};

const swaggerOptions: Options = {
    swaggerDefinition,
    apis: [
        './src/app/routes/*.ts',
        './src/app/controllers/*.ts',
        './src/domain/entities/*.ts'
    ]
};

export default swaggerOptions;