var express = require('express');
var router = express.Router();
var con=require('../connect');
// another routes also appear here
// this script to fetch data from MySQL databse table
router.get('/', function(req, res, next) {
    var sql='SELECT * FROM attendance_table;SELECT * from adult_attendance_table; SELECT * from children_attendance_table;';
    con.query(sql, function (err, data, fields) {
    if (err) throw err;
    //res.send(data);
    res.render('review', { title: 'Attendance', userData: data});
  });
});

module.exports = router;