//EJERCICIO 5

const ListaServicios = (req, res, con) => {

  const IdVehiculo = req.query.id_vehiculo;
  let sql = "SELECT * from servicios where id_veh=" + IdVehiculo;
  con.query(sql, function (err, result){
      if (err) throw err;
      return res.json(result);
  });
}

exports.ListaServicios = ListaServicios;

//EJERCICIO 6

const ServicioInfo = (req, res, con) => {

  const IdServicio = req.query.id_servicio;
  let sql = "SELECT * from servicios where id_service=" + IdServicio;
  con.query(sql, function (err, result){
      if (err) throw err;
      return res.json(result);
  });
}

exports.ServicioInfo = ServicioInfo;

//EJERCICIO 13

const ModificarServicio = (req, res, con) => {

    const IdServicio = req.body.id_service;
    let sql = "update servicios set ? where id_service = " + IdServicio;
  
    let servicio = {
  
        id_service:req.body.id_service,
        id_veh:req.body.id_veh,
        NomServicio:req.body.NomServicio,
        Descripción:req.body.Descripción,
        Fecha:req.body.Fecha
  
    }
  
    con.query(sql, servicio,err => {
  
      if (err) throw err;
      res.send("Servicio Modificado");
  
    });
  }
  
exports.ModificarServicio = ModificarServicio;

//EJERCICIO 14

const CrearServicio = (req, res, con) => {

    let sql = "insert into servicios set ?";
  
    let servicio = {
  
      id_service:req.body.id_service,
      id_veh:req.body.id_veh,
      NomServicio:req.body.NomServicio,
      Descripción:req.body.Descripción,
      Fecha:req.body.Fecha
  
    }
  
    con.query(sql, servicio,err => {
  
      if (err) throw err;
      res.send("Servicio Creado");
  
    });
  }
  
exports.CrearServicio = CrearServicio;

//EJERCICIO 15

const EliminarServicio = (req, res, con) => {

    const IdServicio = req.query.id_service;
    let sql = "delete from servicios where id_service = " + IdServicio;

    con.query(sql, function (err, result){
        if (err) throw err;
        return res.send("Servicio Eliminado");

    });
  }
  
exports.EliminarServicio = EliminarServicio;



