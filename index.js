const app = require('./src/app');
const config = require('./src/config');
const mongoose = require('mongoose');

mongoose.set('useCreateIndex', true);

// Inicia la coneccion con MongoDB
mongoose
    .connect(config.DB_URI, {
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    })
    .then(startServer)
    .catch(console.log);

// Levanta el servidor.
function startServer() {
    app.listen(config.PORT, () => {
        console.log(`${config.APP_NAME} running on ${config.PORT}`);
    });
}