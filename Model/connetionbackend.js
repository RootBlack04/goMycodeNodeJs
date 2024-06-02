const mysql = require("mysql");

const connectionbackend = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  port: "3306",
  database: "backend",
});


module.exports = connectionbackend;
