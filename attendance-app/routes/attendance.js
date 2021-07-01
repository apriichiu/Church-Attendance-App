var express = require('express');
var router = express.Router();
var con=require('../connect');
// another routes also appear here
// this script to fetch data from MySQL databse table
// router.get('/', function(req, res, next) {
//     var sql='SELECT * FROM attendance_table';
//     con.query(sql, function (err, data, fields) {
//     if (err) throw err;
//     res.render('attendance', { title: 'Attendance', userData: data});
//   });
// });


// router.post('/create', function(req, res, next) {
    
//       var firstname     = req.body.firstname;
//       var lastname     = req.body.lastname;
      
//      var sql = `INSERT INTO members_table (firstname, lastname) VALUES ('${firstname}', '${lastname}' )`;
//      con.query(sql,function (err, data) {
//         if (err) throw err;
//              console.log("record inserted");
//          });
//      res.redirect('/attendance');
// });

router.post('/create', function(req, res, next) {
  // store all the user input data
   //res.send(req.body);
  const userDetails=req.body;
//   var firstname     = !userDetails.firstname ? undefined : userDetails.firstname;
//   var lastname     = !userDetails.lastname ? undefined : userDetails.lastname;
//   var email         = !userDetails.email ? undefined : userDetails.email;
  var adultadditionals   = !userDetails.adultadditionals ? undefined : userDetails.adultadditionals;
  var childadditionals   = !userDetails.childadditionals ? undefined : userDetails.childadditionals;
//   var food          = !userDetails.food ? undefined : userDetails.food;
  var date          = new Date();

  
  var fooditem1         = !userDetails.fooditem1 ? undefined : userDetails.fooditem1;
  var fooditem2         = !userDetails.fooditem2 ? undefined : userDetails.fooditem2;
  var fooditem3         = !userDetails.fooditem3 ? undefined : userDetails.fooditem3;
  var fooditem4         = !userDetails.fooditem4 ? undefined : userDetails.fooditem4;
  var fooditem5         = !userDetails.fooditem5 ? undefined : userDetails.fooditem5;

  var sql = "";
  var personnames = [];
  var summary = [];
    // if(firstname != undefined && lastname != undefined){
    // // insert user data into users table
    // var sql = `INSERT INTO attendance_table (firstname, lastname, email, date, foodReserve) VALUES ('${firstname}', '${lastname}', '${email}' , '${date}', "NULL");`;
    // }


    if(adultadditionals != undefined)
    {
        if(!Array.isArray(adultadditionals)) { 
            if(adultadditionals.trim() != ""){
            // var additional = additionals.split(" ");
            // var additional_first = !additional[0] ? "" : additional[0];
            // var additional_last = !additional[1] ? "" : additional[1];
            // var additional_food = additional[3] == "No" ? "No" : "Yes"; 
            sql += `INSERT INTO adult_attendance_table (firstName, date) VALUES ('${adultadditionals}','${date}');`;
            sql += `INSERT INTO attendance_table (firstName, date) VALUES ('${adultadditionals}','${date}');`;
            personnames.push(adultadditionals);
            summary.push("Adult : " + adultadditionals);
            }
        }
        else{
            for(let a of adultadditionals)
            {
                if (a.trim() != ""){
                // var additional = a.split(" ");
                // var additional_first = !additional[0] ? "" : additional[0];
                // var additional_last = !additional[1] ? "" : additional[1];
                // var additional_food = additional[3] == "No" ? "No" : "Yes";
                sql += `INSERT INTO adult_attendance_table (firstName, date) VALUES ('${a}','${date}');`;
                sql += `INSERT INTO attendance_table (firstName, date) VALUES ('${a}','${date}');`;
                personnames.push(a);
                summary.push("Adult : " + a);
                }
            }
        }
    }

    if(childadditionals != undefined)
    {
        if(!Array.isArray(childadditionals)) { 
            // var additional = additionals.split(" ");
            // var additional_first = !additional[0] ? "" : additional[0];
            // var additional_last = !additional[1] ? "" : additional[1];
            // var additional_food = additional[3] == "No" ? "No" : "Yes"; 
            if(childadditionals.trim() !=""){
            sql += `INSERT INTO children_attendance_table (firstName, date) VALUES ('${childadditionals}','${date}');`;
            sql += `INSERT INTO attendance_table (firstName, date) VALUES ('${childadditionals}','${date}');`;
            personnames.push(childadditionals);
            summary.push("Child : " + childadditionals);
            }
        }
        else{
            for(let c of childadditionals)
            {
                if(c.trim() != ""){
                // var additional = a.split(" ");
                // var additional_first = !additional[0] ? "" : additional[0];
                // var additional_last = !additional[1] ? "" : additional[1];
                // var additional_food = additional[3] == "No" ? "No" : "Yes";
                sql += `INSERT INTO children_attendance_table (firstName, date) VALUES ('${c}','${date}');`;
                sql += `INSERT INTO attendance_table (firstName, date) VALUES ('${c}','${date}');`;
                personnames.push(c);
                summary.push("Child : " + c);
                }
            }
        }
    }

    personnames = personnames.join(',');
    if(fooditem1 != undefined){
        sql += `INSERT INTO sunday_food_table (foodName, date, quantity, personnames) VALUES ('Vietnamese Ham Sandwich', '${date}', ${fooditem1}, '${personnames}'); `;
        //summary.push("Vietnamese Ham Sandwich - quantity: " + fooditem1);
    }
        if(fooditem2 != undefined){
        sql += `INSERT INTO sunday_food_table (foodName, date, quantity, personnames) VALUES ('Vietnamese Shrimp Roll', '${date}', ${fooditem2}, '${personnames}'); `;
        //summary.push("Vietnamese Shrimp Roll - quantity: " + fooditem2);
    }
    //     sql += `INSERT INTO sunday_food_table (foodName, date, quantity, personnames) VALUES ('Meat Buns', '${date}', ${fooditem1}, '${personnames}'); `;
    //     //summary.push("Vietnamese Ham Sandwich - quantity: " + fooditem1);
    // }
    //     if(fooditem2 != undefined){
    //     sql += `INSERT INTO sunday_food_table (foodName, date, quantity, personnames) VALUES ('Asian Noodle With Side Dishes', '${date}', ${fooditem2}, '${personnames}'); `;
    //     //summary.push("Vietnamese Shrimp Roll - quantity: " + fooditem2);
    // }
        if(fooditem3 != undefined){
        sql += `INSERT INTO sunday_food_table (foodName, date, quantity, personnames) VALUES ('Vietnamese Grilled Pork Cold Noodle', '${date}', ${fooditem3}, '${personnames}'); `;
        //summary.push("Vietnamese Grilled Pork Cold Noodle - quantity: " + fooditem3);
    }
    //     if(fooditem4 != undefined){
    //     sql += `INSERT INTO sunday_food_table (foodName, date, quantity, personnames) VALUES ('fooditem4', '${date}', ${fooditem4}, '${personnames}'); `;
    //     summary.push("fooditem4 - quantity: " + fooditem4);
    // }
    //     if(fooditem5 != undefined){
    //     sql += `INSERT INTO sunday_food_table (foodName, date, quantity, personnames) VALUES ('fooditem5', '${date}', ${fooditem5}, '${personnames}'); `;
    //     summary.push("fooditem5 - quantity: " + fooditem5);
    // }
  con.query(sql, userDetails,function (err, data) { 
      if (err) throw err;
         console.log("User data is inserted successfully "); 
  });

  //res.send(summary);
  //res.redirect('/success');  // redirect to user form page after inserting the data
  res.render('success',summary);
}); 

module.exports = router;
