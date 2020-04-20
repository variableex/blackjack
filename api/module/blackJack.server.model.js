(function () {


    'use strict';

    var mongoose = require('mongoose'),
        regex = require('regex'),
        Schema = mongoose.Schema;

    var playersSchema = new Schema({
        playerCards: [],
        playerName: {
            type: String,
        },
        moveName: {
            type: String,
        },
        sumOfCards: {
            type: Number,
        }
    })

    var movesSchema = new Schema({
        players: [playersSchema],
        distributerCards: [],
        split: {
            type: Boolean,
            default: false
        },
        playerSplitCards: {
            type: Number
        },
        addedOn: {
            type: Date,
            default: Date.now
        },
        movetype: {
            type: String
        },
        deleted: {
            type: Boolean,
            default: false
        },
        movePlayer: {
            type: String,
            default: "none"
        },
    })

    var blackJackSchema = new Schema({
        noOfPlayers: {
            type: Number
        },
        startTime: {
            type: Date,
            default: Date.now
        },
        endTime: {
            type: Date
        },
        result: {
            type: String,
            trim: true,
            default:"playing"
        },
        winnerName: {
            type: String,
        },
        winningAmount: {
            type: Number
        },
        playingStatus: {
            type: String,
            default: "playing"
        },
        moves: [movesSchema],
    });

    module.exports = mongoose.model('BlackJack', blackJackSchema, 'BlackJack');
    var blackJackCreateSchema = mongoose.model('BlackJack', blackJackSchema, 'BlackJack');

    module.exports.getBlackJacksByIds = function () {
        var result = mongoose.model('BlackJack', blackJackSchema, 'BlackJack').find({}).exec();
        return result
    };

    module.exports.createBlackJack = function (req, res) {
        var blackJackSchema = blackJackCreateSchema(req.body);
        return blackJackSchema.save(blackJackSchema);
    }

    module.exports.updateBlackJack = function (req, res) {
        return blackJackCreateSchema.findOneAndUpdate({'_id':req._id},{$set:req},{new : true}).exec();
    }

    module.exports.getAllBlackJacks = function () {
        
        return mongoose.model('BlackJack', blackJackSchema, 'BlackJack').find({}).exec();
    };

    module.exports.getBlackJackById = function (req, res) {
        return mongoose.model('BlackJack', blackJackSchema, 'BlackJack').find({_id:req._id}).exec();
    };
})();