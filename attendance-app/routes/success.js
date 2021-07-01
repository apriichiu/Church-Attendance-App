var express = require('express');
var router = express.Router();
var con=require('../connect');
// another routes also appear here
// this script to fetch data from MySQL databse table
router.get('/', function(req, res, next) {
    // var sql='SELECT * FROM members_table';
    // con.query(sql, function (err, data, fields) {
    // if (err) throw err;
    //res.send(req.body);
    res.render('success');
    
//   });
});

// router.get('/', function(req, res, next) {
//     res.send(req);
//     //res.render('success', { title: 'Success', summary: req});
// });
module.exports = router;