# Sequelize-Challenge-iMachinary

## Tareas Realizadas

- Armado de base de datos ficticia.
- Creación de Modelos.
- Relación entre modelos.
- Enrutado
- Armado de ruta para generar una consulta a una base de datos.
- Precarga de datos ficticios a una base de datos.

### Orientación de archivos

- src/database: Se encuentran las constantes con los datos ficticios de las personas y películas. Dentro de la misma carpeta se encuentra la función que precarga estos datos a la base de datos.
- src/models: Se encuentran los modelos definidos de Person y Movie.
- src/routes: Se encuentran los enrutados en donde se realizan las consultas a la base de datos.
- src/app.js: Configuración de enrutado
- src/db.js: Configuración y definición de modelos con sequelize.
- index.js: Es el archivo que sincroniza los datos.

#### Endpoints

- GET http://localhost:3001/movies
- GET http://localhost:3001/movies/{id}
- GET http://localhost:3001/persons
- GET http://localhost:3001/persons/{id}

##### Tecnologías utilizadas:
- Node.js
- Express.js
- Sequelize - Postgres
