var express = require('express');
var router = express.Router();
var con=require('../connect');
// another routes also appear here
// this script to fetch data from MySQL databse table
router.get('/', function(req, res, next) {
    var sql='select sum(quantity) as quantity, foodName, date from sunday_food_table group by foodName; select quantity, foodName, date, personnames from sunday_food_table;';
    con.query(sql, function (err, data, fields) {
    if (err) throw err;
    //res.send(data);
    res.render('reviewFood', { title: 'Review Food', userData: data});
  });
});

module.exports = router;