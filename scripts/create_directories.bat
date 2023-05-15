@echo off

mkdir src\app\controllers
echo. > src\app\controllers\TeacherController.ts

mkdir src\app\middlewares\swagger
echo. > src\app\middlewares\swagger\swagger.ts
echo. > src\app\middlewares\swagger\swaggerConfig.ts

echo. > src\app\middlewares\cors.ts
echo. > src\app\middlewares\logger-http.ts

mkdir src\app\routes
echo. > src\app\routes\TeacherRoutes.ts

mkdir src\config
echo. > src\config\index.ts

mkdir src\domain\entities
echo. > src\domain\entities\Teacher.ts

mkdir src\domain\interfaces
echo. > src\domain\interfaces\ITeacherRepository.ts

mkdir src\infra\repositories
echo. > src\infra\repositories\TeacherRepository.ts

echo. > src\app.ts
echo. > src\index.ts
echo. > src\server.ts

echo Directorios y archivos creados.
