const connection = () => {

  var mysql = require('mysql');

  var con = mysql.createConnection({
    host: "localhost",
    port: "3306",
    database: "medacservidor",
    user: "root",
    password: ""
  });

  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

  return con;

}
exports.connection = connection;
