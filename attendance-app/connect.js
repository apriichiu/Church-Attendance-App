var mysql = require('mysql');

var con = mysql.createConnection({
  host: "",
  user: "",
  password: "",
  database: "",
  multipleStatements: true
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
    var sql="select * from attendance_table";
    con.query(sql, function (err, result, fields) {
    if (err) throw err;
    console.log(JSON.stringify(result));
    });
});

module.exports = con;