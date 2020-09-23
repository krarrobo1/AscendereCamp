// En este archivo esta la configuracion de nuestro servidor..

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const routes = require('./routes');
const errorHandler = require('./middlewares/error-handler');

const app = express();

// JSON parser
app.use(express.json());
// Politicas cors
app.use(cors());
// Logger
app.use(morgan('dev'));
// Rutas
app.use('/api', routes);
// Middleware manejador de errores
app.use(errorHandler);

module.exports = app;