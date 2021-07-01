var http = require("http");
const express = require('express');
const app = express();
let ejs = require('ejs');
var bodyParser = require('body-parser')


app.set('view engine', 'ejs');

// parse application/json
app.use(bodyParser.json())

app.use(bodyParser.urlencoded({
  extended: true
}));

//routes
// app.get('/', (req, res) => res.send('Hello World!'))

// app.get('/', (req, res) => {
//   res.render('index', {foo: 'FOO'});
// });


// app.route('/book')
//   .get(function (req, res) {
//     res.send('Get a random book')
//   })
//   .post(function (req, res) {
//     res.send('Add a book')
//   })
//   .put(function (req, res) {
//     res.send('Update the book')
//   })

var userRouter = require('./routes/user');
app.use('/user',userRouter);

var indexRouter = require('./routes/attendance');
app.use('/',indexRouter);


var successRouter = require('./routes/success');
app.use('/success',successRouter);

var reviewRouter = require('./routes/review');
app.use('/review',reviewRouter);

var reviewFoodRouter = require('./routes/reviewFood');
app.use('/reviewFood',reviewFoodRouter);
//  var birds = require('./routes/birds')
//  app.use('/birds', birds)

//static

app.use(express.static('public'))
app.use(express.static('views'))

//render

// app.get('/', function (req, res) {
//   res.render('index', { firstname: 'Hey', lastname: 'Hello there!' })
// })

//listen
app.listen(3000, () => console.log(`Example app listening at http://localhost:3000`))
