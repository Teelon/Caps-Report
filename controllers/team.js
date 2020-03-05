// jshint esversion:6

const express = require("express");
const mongoose = require("mongoose");
const Team = require(process.cwd() + "/models/team");

exports.send_team = (req, res) => {
  console.log("here");
  const battingTeam =req.query.batTeam;
  const bowlingTeam =req.query.bowlTeam;

  const info = {
    batters: [],
    bowlers: []
  };
  Team.find({
    _id: {
      $in: [
        mongoose.Types.ObjectId(battingTeam),
        mongoose.Types.ObjectId(bowlingTeam)
      ]
    }
  })
  .then(teams =>{
    teams.forEach(team =>{
      if(team._id == battingTeam){
        info.batters =team.members;
      }else{
        info.bowlers = team.members;
      }
    });

    res.send(info);
  });

  
  console.log("info passed for team");
};

exports.send_team_division = (req, res) => {
  const div = req.query.divName;
  Team.find({ division:div }).then(teams => {
    res.send(teams);
  });
};
