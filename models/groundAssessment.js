// jshint esversion:6

const mongoose = require ("mongoose");

const groundAssessment = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    pitchPreperation:Number,
    PitchMarkings: Number,
    boundryMarks: Number, 
    outfeild: Number, 
    spritOfTheGame: Number, 
});

module.exports = mongoose.model("GroundAssesment",groundAssessment);
