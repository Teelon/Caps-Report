//jshint esversion:6

const mongoose = require("mongoose");
const GA = require(process.cwd() + "/models/groundAssessment");

const matchSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  matchType: String,
  division: String,
  date: Date,
  homeTeam: String,
  visitor: String,
  startTime:{
     day1: String,
     day2: String
  },
  groundAssessment: {
    pitchPreperation: Number,
    PitchMarkings: Number,
    boundryMarks: Number,
    outfeild: Number,
    spritOfTheGame:Number
  },
  tossWonBy: String,
  chooseTo:String,
  inns:[{
    inn : Number,
    team:String,
    runs: Number,
    wkts: Number
  }],
 
  // umpiresAssement:[],
   batsmanScore:[],
   bowlerScore:[],
   extra: {
    wides: String,
    noBalls: String,
    byes:String,
    legByes: String
  }
});

module.exports = mongoose.model("Match", matchSchema);
