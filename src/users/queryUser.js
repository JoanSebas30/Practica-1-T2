//EJERCICIO 1

const ListaUsus = (req, res, con) => {
  let sql = "SELECT * from usuarios";
  con.query(sql, function (err, result){
      if (err) throw err;
      return res.json(result);
  });
}
exports.ListaUsus = ListaUsus;

//EJERCICIO 2

const usuarioinfo = (req, res, con) => {

  const IdUsuario = req.query.id_user;
  let sql = "SELECT * from usuarios where id_user=" + IdUsuario;
  con.query(sql, function (err, result){
      if (err) throw err;

      if(result.length>0){
        return res.json(result);

      }
      else{
        res.send("No hay nadie con ese numero de ID");
      }
  });
}

exports.usuarioinfo = usuarioinfo;

//EJERCICIO 7

const ModificarUsuario = (req, res, con) => {

  const IdUsuario = req.body.id_user;
  let sql = "update usuarios set ? where id_user = " + IdUsuario;

  let usuario = {

    id_user: req.body.id_user,
    login: req.body.login,
    password: req.body.password,
    rol_id:req.body.rol_id

  }

  con.query(sql, usuario,function (err, result) {
    if (err) throw err;

    if(result.length>0){

      return res.send("Usuario Modificado");

    }
    else{
      return res.send("No hay nadie con ese numero de ID");
    }
  });

}

exports.ModificarUsuario = ModificarUsuario;

//EJERCICIO 8

const CrearUsuario = (req, res, con) => {

  let sql = "insert into usuarios set ?";

  let usuario = {

    id_user: req.body.id_user,
    login: req.body.login,
    password: req.body.password,
    rol_id:req.body.rol_id

  }

  con.query(sql, usuario,err => {

    if (err) throw err;
    res.send("Usuario Creado");

  });

}

exports.CrearUsuario = CrearUsuario;

//EJERCICIO 9

const BorrarUsuario = (req, res, con) => {

  const IdUsuario = req.query.id_user;
  let sql = "delete from usuarios where id_user = " + IdUsuario;

  con.query(sql, function (err, result){

    if (err) throw err;
    res.send("Usuario Eliminado");

  });
}

exports.BorrarUsuario = BorrarUsuario;

//EJERCICIO 16

const InfoUsuVehiculos = (req, res, con) => {

  const id  = req.query.id_user;
  let sql = "select * from usuarios usu, vehiculos veh where usu.id_user = " + id + 
  " and veh.id_user = " + id;

  con.query(sql, function (err, result){

    if (err) throw err;
    return res.json(result);

  });
}

exports.InfoUsuVehiculos = InfoUsuVehiculos;





