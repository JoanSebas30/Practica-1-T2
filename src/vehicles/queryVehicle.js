//EJERCICIO 3

const ListaVehiculos = (req, res, con) => {

    const IdUsuario = req.query.id_user;
    let sql = "SELECT * from vehiculos where id_user=" + IdUsuario;
    con.query(sql, function (err, result){
        if (err) throw err;
        return res.json(result);
    });
  }
  
exports.ListaVehiculos = ListaVehiculos;

//EJERCICIO 4

const vehiculoinfo = (req, res, con) => {

    const IdVehiculo = req.query.id_vehiculo;
    let sql = "SELECT * from vehiculos where id_veh=" + IdVehiculo;
    con.query(sql, function (err, result){
        if (err) throw err;
        return res.json(result);
    });
  }
  
exports.vehiculoinfo = vehiculoinfo;

//EJERCICIO 10

const ModificarVehiculo = (req, res, con) => {

  const IdVehiculo = req.body.id_veh;
  let sql = "update vehiculos set ? where id_veh = " + IdVehiculo;

  let vehiculo = {

    id_veh:req.body.id_veh,
    marca:req.body.marca,
    modelo:req.body.modelo,
    matricula:req.body.matricula,
    combustible:req.body.combustible,
    tipo_motor:req.body.tipo_motor

  }

  con.query(sql, vehiculo,err => {

    if (err) throw err;
    res.send("Vehiculo Modificado");

  });
}

exports.ModificarVehiculo = ModificarVehiculo;

//EJERCICIO 11

const CrearVehiculo = (req, res, con) => {

  let sql = "insert into vehiculos set ?";

  let vehiculo = {

    marca:req.body.marca,
    modelo:req.body.modelo,
    matricula:req.body.matricula,
    combustible:req.body.combustible,
    tipo_motor:req.body.tipo_motor

  }

  con.query(sql, vehiculo,err => {

    if (err) throw err;
    res.send("Vehiculo Creado");

  });
}

exports.CrearVehiculo = CrearVehiculo;

//EJERCICIO 12

const EliminarVehiculo = (req, res, con) => {

  const IdVehiculo = req.query.id_veh;
  let sql = "delete from vehiculos where id_veh = " + IdVehiculo;

  con.query(sql, function (err, result){
    if (err) throw err;
    return res.send("Vehiculo Eliminado");
  });

}

exports.EliminarVehiculo = EliminarVehiculo;

//EJERCICIO 17

const InfoVehServicios = (req, res, con) => {

  const id  = req.query.id_veh;
  let sql = "select * from vehiculos veh, servicios ser where veh.id_veh = " + id 
  + " and veh.id_veh = ser.id_veh";

  con.query(sql, function (err, result){

    if (err) throw err;
    return res.json(result);

  });
}

exports.InfoVehServicios = InfoVehServicios;