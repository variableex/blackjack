var blackJackRouters = (function () {

    'use strict';

    var express = require('express'),
        blackJackController = require('../controllers/blackJack.server.controller'),
        blackJackRouter = express.Router();

    blackJackRouter.route('/createBlackJack').post(blackJackController.createBlackJack);
    blackJackRouter.route('/pushMoves').post(blackJackController.updateBlackJack);
    blackJackRouter.route('/popMoves').post(blackJackController.popMoves);
    blackJackRouter.route('/result').post(blackJackController.result);
    // 

    return blackJackRouter;

})();

module.exports = blackJackRouters;