// jshint esversion:6

const mongoose= require("mongoose");

const batsmanScore = mongoose.Schema({
    matchId: String,
    inns:String,
    playerId:String,
    playerName: String,
    score: Number,
    howOut:String,
    blowerId:String,
    blowerName: String
});

const BatsmanScore = mongoose.model("BatmansScore", batsmanScore);

module.exports={
    BatsmanScore:BatsmanScore
};