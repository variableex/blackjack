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
            trim: true
        },
        winningAmount: {
            type: Number,
            trim: true
        },
        bettingAmount: {
            type: Number,
            trim: true
        },
        playingStatus: {
            type: String,
            default: "playing"
        },
        moves: [movesSchema],
    });

    module.exports = mongoose.model('blackJack', blackJackSchema, 'blackJack');
    var blackJackCreateSchema = mongoose.model('blackJack', blackJackSchema, 'blackJack');

    module.exports.createBlackJack = function (req, res) {
        var blackJackSchema = blackJackCreateSchema(req.body);
        return blackJackSchema.save(blackJackSchema);
    }

    module.exports.updateBlackJack = function (req, res) {
        return blackJackCreateSchema.findOneAndUpdate({'_id':req.body._id},{$push:{moves:req.body.moves}},{new : true}).exec();
    }

    module.exports.getAllBlackJacks = function () {
        return mongoose.model('blackJack', blackJackSchema, 'blackJack').find({}).exec();
    };

    module.exports.pushMoves = function () {
        return blackJackSchema.findOneAndUpdate({'_id':requestObjectId},{$push:{likes:req.body.likes}}).exec();
    }

    module.exports.getBlackJackById = function (req, res) {
        return mongoose.model('blackJack', blackJackSchema, 'blackJack').find({_id:req._id}).exec();
    };
})();