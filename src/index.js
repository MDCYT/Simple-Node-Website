const express = require("express");
const app = express();
const path = require("path");
const morgan = require("morgan");
require("dotenv").config();

const indexRoutes = require("./routes/index");

//Configuraciones
const port = process.env.PORT || 3000;
app.set("views", path.join(__dirname, "views"));
app.engine("html", require("ejs").renderFile);
app.set("view engine", "ejs");
app.set("json spaces", 2);
app.set("protocol", "https")
app.use(morgan("dev"));

//Verificaciones Previas

//SSL
if (process.env.SSL === true) {
  app.get('*', function (req, res) {
    res.redirect('https://' + req.headers.host + req.url);
  })
}

//Rutas
app.use(indexRoutes);

//Archivos Estaticos
app.use(express.static(path.join(__dirname, "public")));

//Error 404
app.use(function (req, res, next) {
  if (!req.route) {
    res.json("hola");
  }
});

//Escuchando el Puerto
app.listen(port, () => {
  console.log("Estoy en el puerto", port);
});
