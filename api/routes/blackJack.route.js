var blackJackRouters = (function () {

    'use strict';

    var express = require('express'),
        blackJackController = require('../controllers/blackJack.server.controller'),
        blackJackRouter = express.Router();

    blackJackRouter.route('/createBlackJack').post(blackJackController.createBlackJack);
    blackJackRouter.route('/pushMoves').post(blackJackController.updateBlackJack);

    return blackJackRouter;

})();

module.exports = blackJackRouters;