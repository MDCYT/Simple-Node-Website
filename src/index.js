const express = require("express");
const app = express();
const path = require("path");
const port = 3000;

const indexRoutes = require('./routes/index')

//Configuraciones
app.set('views', path.join(__dirname,'views'))
app.engine('html', require('ejs').renderFile)
app.set('view engine', 'ejs')

//Verificaciones Previas

//Rutas
app.use(indexRoutes)

//Archivos Estaticos
app.use(express.static(path.join(__dirname, 'public')))

//Escuchando el Puerto
app.listen(port, () => {
  console.log("Estoy en el puerto", port)
});