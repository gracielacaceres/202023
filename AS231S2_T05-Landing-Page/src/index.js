/*Importar las librerias */
var express = require("express");
var mysql = require("mysql");
var app = express();
var cors = require("cors");

/* Configuraciones */
app.use(express.json());
app.use(cors());

var conexion = mysql.createConnection({
    host: "localhost",
    user: "nurela",
    password: "admin",
    database: "dbFormulario",
  });

  
conexion.connect(function (error) {
    if (error) {
      throw error;
    } else {
      console.log("Conexión exitosa");
    }
  });
  
  const puerto = process.env.PUERTO || 3000;

  app.listen(puerto, function () {
    console.log("Servidor funcionando en puerto: " + puerto);
  });



  app.post("/api/usuario", (req, res) => {
	let data = {
    	nombres: req.body.NOMBRES,
    	apellidos: req.body.APELLIDOS,
    	telefono: req.body.TELEFONO,
    	correo: req.body.CORREO,
    	mensaje: req.body.MENSAJE
	};
	let sql = "INSERT INTO usuario SET ?";
	conexion.query(sql, data, function (error, results) {
  	if (error) {
    	throw error;
  	} else {
    	console.log(data);
    	res.send(data);
  	}
	});
  });

  //localhost:3000/api/usuario

  //Calendario
  app.get("/api/calendario", (req, res) => {
      let sql = "SELECT * FROM calendario WHERE MONTH(DATECAL) = MONTH(CURDATE()) AND DAY(DATECAL) = DAY(CURDATE());";
    
      conexion.query(sql, function (error, resultados) {
        if (error) {
          throw error;
        } else {
          console.log(resultados);
          res.send(resultados);
        }
      });
    });


  

  