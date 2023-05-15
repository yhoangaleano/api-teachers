#!/bin/bash

mkdir -p src/app/controllers
touch src/app/controllers/TeacherController.ts

mkdir -p src/app/middlewares/swagger
touch src/app/middlewares/swagger/swagger.ts
touch src/app/middlewares/swagger/swaggerConfig.ts

touch src/app/middlewares/cors.ts
touch src/app/middlewares/logger-http.ts

mkdir -p src/app/routes
touch src/app/routes/TeacherRoutes.ts

mkdir -p src/config
touch src/config/index.ts

mkdir -p src/domain/entities
touch src/domain/entities/Teacher.ts

mkdir -p src/domain/interfaces
touch src/domain/interfaces/ITeacherRepository.ts

mkdir -p src/infra/repositories
touch src/infra/repositories/TeacherRepository.ts

touch src/app.ts
touch src/index.ts
touch src/server.ts

echo "Directorios y archivos creados."
