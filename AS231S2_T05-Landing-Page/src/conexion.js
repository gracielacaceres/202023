const {error} = require('console');
const http = requiere('http');
const express = require('express');
const app = express();
const path = require('path');
const mysql = require('mysql');
const port = 3000;
const ip = 'localhost';
const cors = require('cors');

const server = http.createServer(app);

server.listen(port, function () {
    console.log("El servidor esta funcionando en http://" + ip + ":" + port);
});


app.use(express.static('DEMO'));

app.use('/assets', express.static('assets'));
app.use('/assets/css', express.static('assets/css'));
app.use('/assets/img', express.static('assets/img'));
app.use('/assets/js', express.static('assets/js'));
app.use('/assets/pages', express.static('assets/pages'));
app.use('/assets/pdf', express.static('assets/pdf'));

const conexion = mysql.createConnection({
    host: "localhost",
    database: "centrodemujeres",
    user: "root",
    password: "admin",
})

conexion.connect(function (err) {
    if (err) {
        throw error;
    } else {
        console.log("conexion exitosa")
    }
});

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended: false }));

app.get("/api/dates/:current", (req, res) => {
    var request = req.params.current;
    conexion.query("SELECT NAMECAL, DESCAL, date_format(DATECAL, ''%d/%m/%Y') AS DATECAL, DESCRIPCAL FROM CALENDARIE WHERE DATECAL =?", [request], function (err, row fields) {
        if (err) {
            throw err;
        } else if (row[0] != null){
            res.json(row[0]);
        } else{
            res.json(null);
        }
    })
});