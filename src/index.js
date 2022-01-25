const c = require('./common/conexion');
var con = c.connection();
const {query} = require('express');
const express = require('express');
const app = express();
const morgan=require('morgan');
 
//Configuraciones
app.set('port', process.env.PORT || 4000);
app.set('json spaces', 2)

const bodyParser = require('body-parser');
const cors = require('../node_modules/cors');
 
//Middleware
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
 
//EJERCICIO 1
const usuarios = require('./users/queryUser').ListaUsus;
app.get('/usuario', (req, res) => usuarios(req,res,con));

//EJERCICIO 2
const usuarioInfo = require('./users/queryUser').usuarioinfo;
app.get('/usuarioInfo', (req, res) => usuarioInfo(req,res,con));

//EJERCICIO 3

const ListaVehiculos = require('./vehicles/queryVehicle').ListaVehiculos;
app.get('/ListaVehiculos', (req, res) => ListaVehiculos(req,res,con));

//EJERCICIO 4

const vehiculoInfo = require('./vehicles/queryVehicle').vehiculoinfo;
app.get('/vehiculoinfo', (req, res) => vehiculoInfo(req,res,con));

//EJERCICIO 5

const servicios = require('./services/queryServices').ListaServicios;
app.get('/ListaServicios', (req, res) => servicios(req,res,con));

//EJERCICIO 6

const servicioinfo = require('./services/queryServices').ServicioInfo;
app.get('/infoservicio', (req, res) => servicioinfo(req,res,con));

//EJERCICIO 7

const ModificarUsuario = require('./users/queryUser').ModificarUsuario;
app.post('/usuarioModificar', (req, res) => ModificarUsuario(req,res,con));

//EJERCICIO 8

const usuarioNuevo = require('./users/queryUser').CrearUsuario;
app.post('/usuarioNuevo', (req, res) => usuarioNuevo(req,res,con));

//EJERCICIO 9

const usuarioBorrar = require('./users/queryUser').BorrarUsuario;
app.get('/usuarioBorrar', (req, res) => usuarioBorrar(req,res,con));

//EJERCICIO 10

const ModificarVehiculo = require('./vehicles/queryVehicle').ModificarVehiculo;
app.post('/vehiculoModificar', (req, res) => ModificarVehiculo(req,res,con));

//EJERCICIO 11

const vehiculoNuevo = require('./vehicles/queryVehicle').CrearVehiculo;
app.post('/vehiculoNuevo', (req, res) => vehiculoNuevo(req,res,con));

//EJERCICIO 12

const vehiculoEliminar = require('./vehicles/queryVehicle').EliminarVehiculo;
app.get('/vehiculoEliminar', (req, res) => vehiculoEliminar(req,res,con));

//EJERCICIO 13

const ModificarServicio = require('./services/queryServices').ModificarServicio;
app.post('/servicioModificar', (req, res) => ModificarServicio(req,res,con));

//EJERCICIO 14

const CrearServicio = require('./services/queryServices').CrearServicio;
app.post('/servicioCrear', (req, res) => CrearServicio(req,res,con));

//EJERCICIO 15

const EliminarServicio = require('./services/queryServices').EliminarServicio;
app.get('/servicioEliminar', (req, res) => EliminarServicio(req,res,con));

//EJERCICIO 16

const InfoUsuVehiculos = require('./users/queryUser').InfoUsuVehiculos;
app.get('/InfoUsuVehiculos', (req, res) => InfoUsuVehiculos(req,res,con));

//EJERCICIO 17

const InfoVehServicios = require('./vehicles/queryVehicle').InfoVehServicios;
app.get('/InfoVehServicios', (req, res) => InfoVehServicios(req,res,con));

//Iniciando el servidor
app.listen(app.get('port'),()=>{
    console.log(`Server listening on port ${app.get('port')}`);
});