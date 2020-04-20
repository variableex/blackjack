
var express = require('express'),
  app = require('./index'),
  port = process.env.PORT || 8080,
  mongoose = require('mongoose'),
  bodyParser = require('body-parser');
  
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/BlackJack'); 

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(port);