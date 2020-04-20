const express = require('express');
const app = express();
var cors = require('cors')
const bodyParser = require('body-parser');
    app.use(cors())
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());

    var blackJackRoutes = require('./routes/blackJack.route')
    app.use('/api/blackJack',blackJackRoutes)

    
module.exports = app;

