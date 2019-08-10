var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const bodyParser = require("body-parser");
const cors = require("cors");

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const shopsRouter = require("./routes/shops");

var app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json()); // Parse application/jsom

app.use('/', indexRouter);
app.use('/shops', shopsRouter);
app.use('/users', usersRouter);


module.exports = app;