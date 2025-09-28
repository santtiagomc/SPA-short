# SPA-short
Objetivo realizar una SPA lo mas corta posible y asi practicar desde la creacion de la base de datos, backend y frontend 

# Creacion de la base de datos
vamos a usar postgreSQL para la base de datos, en la cual nos centraremos en la gestion de una biblioteca para practicar la creacion de tablas y la definicion de relaciones y el uso de SQL
-ingresamos a psql desde la terminal "psql -U postgres" verificamos las bases de datos existentes "\ls"
-creamos una base de datos para nuestro proyecto "CREATE DATABASE book_short;" nos debe responder "CREATE DATABASE" verificamos de nuevo listando las bases de datos "\l" despues podemos ingresar a la base de datos para trabajar en ella con "\c book_short",con "\! cls" podemos limpiar la pantalla
-vamos a realizar las creaciones de las tablas 
-- 1. Crear la tabla para los autores
CREATE TABLE autores ( 
    autor_id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    nacionalidad VARCHAR(50)
);

-- 2. Crear la tabla para los libros, con una relación al autor
CREATE TABLE libros (
    libro_id SERIAL PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    anio_publicacion INTEGER,
    autor_id INTEGER REFERENCES autores(autor_id) -- Clave foránea
);

-- 3. Crear una tabla simple para los clientes

CREATE TABLE clientes (
    cliente_id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE
);

CREATE TABLE nombre_tabla es la instruccion en la cual se le dice que se va a crear la nueva tabla con este nombre, todo lo que se encuentre dentro de la tabla van a ser los valores con los cuales cuenta esta tabla en el caso de autores con autor_id SERIAL PRIMARY KEY, el cual autor_id viene siendo el nombre de la columna y se usa para poder identificar de forma unica a cada registro (autor) en la tabla, el siguiente seria SERIAL la cual es una abreviatura de psql que crea un campo de tipo entero (INTEGER) y crea una secuencia a esa columna, esto indica que cada vez que se crea o se inserta una nueva fila y es autoincremental este es el tipo de dato, siguiente tenemos un PRIMARY KEY la cual es la restriccion que establece dos restricciones las cuales son de unicidad y no nulidad, lo cual se realiza para que cada valor de esta columna sea unico para cada fila y que nunca pueda ser nulo 

en nombre cuenta con nombre de la columna el cual va a ser el unico identificador de este, el siguiente es el tipo de dato que en este caso es nombre VARCHAR(100) NOT NULL, el cual significa que se va a crear una columna diseñada para contener texto, con un limite de 100 caracteres y que es obligatorio que tenga un valor, igualmente con nacionalidad de 50 caracteres maximo
en el caso de la clave foranea de la tabla de libros, tiene una referencia a la primera tabla que es autores, esto debido a que en este caso un libro debe tener un autor el cual vamos a hacer referencia con esta clave foranea




# Creacion de primeros archivos y union de git con github
-empezamos con la creacion de archivos en las carpetas locales
-creamos en gitub el repositorio, para realizar la union en la cual ya estan configuradas las llaves SSH
-inicializamos el repositorio en git con este comando "git init -b main" se le añade el main para que la rama principal se llame de este modo
-este comando "git remote add origin https://github.com/tu-usuario/tu-repositorio.git" para enlazar el repositorio remoto con el repositorio local
-para finalizar probamos el envio de archivos que ya estan creados desde el local y el remoto, usamos "git add ." despues "git commit -am"primer commit desde local"" y por ultimo "git push origin main" para enviar los archivos desde el local al repositorio y verificar que el envio de archivos se estan realizando  


# 
