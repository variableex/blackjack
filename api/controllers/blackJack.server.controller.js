var blackJackController = (function () {

    'use strict';

    var BlackJack = require('../module/blackJack.server.model'),
    Promise = require("bluebird");

    function BlackJackModule() { }

    var _p = BlackJackModule.prototype;



    _p.updateBlackJack = function (req, res) {
        BlackJack.updateBlackJack(req, res).then(resData => {
            res.status(200).json({
                status:true,
                message:"player Move saved Successfully",
                data: resData
            })
        }).catch(err => {
            res.status(500).json({
                error:err,
                status:false,
                message:"Somting Bad Happned"
            })
        })
    }

    _p.result = function (req, res) {
        BlackJack.result(req, res).then(resData => {
            res.status(200).json({
                status:true,
                message:"player Move saved Successfully",
                data: resData
            })
        }).catch(err => {
            res.status(500).json({
                error:err,
                status:false,
                message:"Somting Bad Happned"
            })
        })
    }

    // result

    _p.popMoves = function (req, res) {
        BlackJack.popMoves(req, res).then(resData => {
            res.status(200).json({
                status:true,
                message:"player Move saved Successfully",
                data: resData
            })
        }).catch(err => {
            res.status(500).json({
                error:err,
                status:false,
                message:"Somting Bad Happned"
            })
        })
    }

    _p.createBlackJack = function (req, res) {
        BlackJack.createBlackJack(req,res).then(resData => {
            res.status(200).json({
                status: true,
                message: "BlackJack Created Successfully",
                data: resData
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
        createBlackJack:_p.createBlackJack,
        updateBlackJack:_p.updateBlackJack,
        popMoves:_p.popMoves,
        result:_p.result
    };
})();

module.exports = blackJackController;