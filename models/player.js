//jshint esversion:6

const mongoose = require('mongoose');

const player = new mongoose.schema({
    fName: String,
    lName: String
});

const Player = mongoose.model("Player", player);

module.exports ={
    Player:Player
};