//Requirements
const express = require('express');
let bodyParser = require('body-parser');
let cookieParser = require('cookie-parser');
let logger = require('morgan');
let mongo = require('mongodb');
let mongoose = require('mongoose');
let path = require('path');
let port = process.env.PORT || 3000;
let session = require('express-session');
let seedMockInfo = true;

//Setting up db
let dbURL;
if (process.env.NODE_ENV === 'test') {
  dbURL = 'mongodb://localhost/appointmentsScheduler_test';
} else {
  dbURL = 'mongodb://localhost/appointmentsScheduler';
}

mongoose.connect(dbURL, (err) => {
  if (err) { throw err; }
});
let db = mongoose.connection;

//TODO: Take this out when ready to use in production
if(seedMockInfo) {
  let mock_info = [];
  let mock_docs = require('./test/fixtures/MOCK_DOCTORS');
  let mock_pats = require('./test/fixtures/MOCK_PATIENTS');
  let mock_appts = require('./test/fixtures/MOCK_APPOINTMENTS');
  mock_info.push(mock_docs);
  mock_info.push(mock_pats);
  mock_info.push(mock_appts);
  for(let i = 0; i < mock_info.length; i++) {
    for(let j = 0; j < mock_info[i].length; j++) {
      mock_info[i][j].save();
    }
  }
}

//Setting up routes
let index = require('./routes/index');
let api = require('./routes/api/index');

let app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:4200");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//Setting up server
let server = app.listen(port, ()=> {console.log('Listening on port ' + port); });

//Middleware: Body Parsing, Validation
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

app.use('/', index);
app.use('/api', api);

app.use((req, res, next) => {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err: {};

  console.log(err);
  res.status(err.status || 500);
  res.json(err);
});

module.exports = app;