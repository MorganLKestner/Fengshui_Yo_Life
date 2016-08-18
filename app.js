const express = require('express');
const app = express();
const mustacheExpress = require('mustache-express');
const bodyParser = require("body-parser");
const session = require('express-session');
const flash = require('connect-flash');
const request = require('request');

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', 'example.com');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
}

app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.use("/", express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



app.use(session({
  secret: 'project-secret',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}));

app.use(flash());

// app.listen(3000, function () {
//   console.log('Need more input, Johnny Five Alive');
// });
// app.all('*', function(req, res, next) {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
//     res.header('Access-Control-Allow-Headers', 'accept, content-type, x-parse-application-id, x-parse-rest-api-key, x-parse-session-token');
//      // intercept OPTIONS method
//     if ('OPTIONS' == req.method) {
//       res.send(200);
//     }
//     else {
//       next();
//     }
// });

app.use(function(err, req, res, next){
	app.use(allowCrossDomain);

  res.status(err.status || 500);
});

const router = require('./router')(app);

app.set('port', (process.env.PORT || 3000));

app.listen(app.get('port'), function(){
  console.log('Node app is running on port ', app.get('port'));
});