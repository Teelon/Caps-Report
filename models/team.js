//jshint esversion:6

const mongoose = require('mongoose');


const teamSchema = new mongoose.Schema({
    name: String,
    //userId: String,
    //password: String,
    members:[],
    division:String
});

module.exports = mongoose.model("Team", teamSchema);
