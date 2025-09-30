// Importamos Express
const express = require('express');
const app = express();
const PORT = 3000; // El puerto en el que correrá nuestro servidor

// Importamos el cliente de PostgreSQL
const { Client } = require('pg');


// 2. CONFIGURACIÓN DE LA CONEXIÓN A POSTGRESQL
// ----------------------------------------------------
const dbConfig = {
    user: 'postgres',       // ⬅️ CAMBIA ESTO
    host: 'localhost',                 // O la dirección de tu servidor DB
    database: 'book_short',           // ⬅️ CAMBIA ESTO (el nombre de tu BD)
    password: '654321', // ⬅️ CAMBIA ESTO
    port: 5432,                        // Puerto por defecto de PostgreSQL
};

// Función para conectar el cliente
const client = new Client(dbConfig);

// Intentamos conectar el cliente a la BD
client.connect()
    .then(() => {
        console.log('✅ Conexión exitosa a PostgreSQL.');
    })
    .catch(err => {
        console.error('❌ Error de conexión a PostgreSQL:', err.stack);
    });


// Middleware para que Express pueda leer JSON en las peticiones
app.use(express.json());
// ----------------------------------------------------
// 1. RUTA DE PRUEBA
// ----------------------------------------------------
app.get('/', (req, res) => {
    res.send('Servidor de la Librería funcionando con Express.');
});

// 3. RUTAS API: OBTENER TODOS LOS LIBROS (GET /libros)
// ----------------------------------------------------
app.get('/libros', async (req, res) => {
    try {
        // Consulta SQL para obtener todos los registros de la tabla 'libros'
        const result = await client.query('SELECT * FROM libros ORDER BY titulo ASC');
        
        // Enviamos la respuesta con los datos obtenidos
        res.json({ 
            message: 'Lista de libros obtenida con éxito',
            data: result.rows 
        });

    } catch (err) {
        console.error('Error al ejecutar la consulta:', err);
        // Enviamos un error 500 (Internal Server Error)
        res.status(500).json({ error: 'Error interno del servidor al obtener libros' });
    }
});

// ----------------------------------------------------
// 3. INICIAR EL SERVIDOR
// ----------------------------------------------------
app.listen(PORT, () => {
    console.log(`Servidor Express corriendo en el puerto ${PORT}`);
    console.log(`Accede a: http://localhost:${PORT}`);
});