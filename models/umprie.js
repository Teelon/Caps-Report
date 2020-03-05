//jshint esversion:6

const mongoose = require('mongoose');

const umpire = new mongoose.schema({
    fName: String,
    lName: String
});

const Umpire = mongoose.model("Umpire", umpire);

module.exports ={
    Umpire:Umpire
};