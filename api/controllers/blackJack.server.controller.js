var blackJackController = (function () {

    'use strict';

    var BlackJack = require('../module/blackJack.server.model'),
    Promise = require("bluebird");

    function BlackJackModule() { }

    var _p = BlackJackModule.prototype;

    _p.findBlackJackEmail = function (req, res) {
        BlackJack.findBlackJackEmail(req, res).then(resData =>{
            res.status(200).json({
                status: true,
                message: "BlackJack Info",
                data: resData.length,
            });
        })
        .catch(err => {
            res.status(500).json({
              error: err,
              status: false
            })
          })
    }

    _p.updateBlackJack = function (req, res) {
        BlackJack.updateBlackJack(req.body,res).then(resData => {
            res.status(200).json({
                status: true,
                message: "Details Updated Successfully",
                data: resData
            });
        })
        .catch(err => {
            res.status(500).json({
              error: err,
              status: false
            })
          })
    }

    _p.createBlackJack = function (req, res) {
        BlackJack.createBlackJack(req,res).then(resData => {
            res.status(200).json({
                status: true,
                message: "BlackJack Created Successfully"
            });
        })
        .catch(err => {
            res.status(500).json({
              error: err,
              status: false
            })
          })
        
    };

    return {
        getBlackJackLogin:_p.getBlackJackLogin,
        getBlackJackInfo:_p.getBlackJackInfo,
        updateBlackJack:_p.updateBlackJack,
        createBlackJack:_p.createBlackJack,
        findBlackJackName:_p.findBlackJackName,
        findBlackJackEmail:_p.findBlackJackEmail
    };
})();

module.exports = blackJackController;