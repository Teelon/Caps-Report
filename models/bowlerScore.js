// jshint esversion:6

const mongoose = require("mongoose");

const bowlerScore =  new mongoose.Schema({
    matchId: String,
    inns:String,
    playerId:String,
    playerName: String,
    runs:Number,
    wkts:Number,
    maidens:Number,
    numberOfOvers:Number
});

const BowlerScore = mongoose.model("BowlerScore",bowlerScore);

module.exports= {
    BowlerScore: BowlerScore
};