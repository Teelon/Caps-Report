// jshint esversion:6

const mongoose = require("mongoose");

const umpireAssessment = mongoose.Schema({
    matchId: String,
    umpireName: String,
    UmpireId: String,
    knowledgeSkill:Number,
    decisionQuality:Number,
    interpretation:Number,

});

const UmpireAssessment = mongoose.model("UmpireAssessment", umpireAssessment);


module.exports={
    UmpireAssessment: UmpireAssessment
};