// jshint esversion:6

const mongoose = require("mongoose");
const Match = require(process.cwd() + "/models/match");
const Team = require(process.cwd() + "/models/team");

exports.send_form = (req, res) => {
 console.log(req.query);
  const homeTeamId =req.query.homeTeam;
  const awayTeamId = req.query.awayTeam;
  Team.find({
    _id: {
      $in: [
        mongoose.Types.ObjectId(homeTeamId),
        mongoose.Types.ObjectId(awayTeamId)
      ]
    }
  })
    .then(teams => {
      const data = {
        division:"",
        home: "",
        home_id: "",
        away: "",
        away_id: "",
        homeMembers: [],
        awayMembers:[]
      };

      teams.forEach(team => {
        if (team._id == homeTeamId) {
          data.home = team.name;
          data.homeMembers =team.members;
          data.home_id =team._id;
          data.division = team.division;
        }else{
          data.away = team.name;
          data.awayMembers =team.members;
          data.away_id =team._id;
        }
      });
     // res.send(data);
     res.render(process.cwd() + "/views/index", { info: data });
    })
    .catch(err => console.log(err));

  
};

exports.posted_form = (req, res) => {
  const innobj = createInns(req);

  const match = new Match({
    _id: new mongoose.Types.ObjectId(),
    matchType: req.body.matchType,
    division: req.body.division,
    date: req.body.date,
    homeTeam: req.body.homeTeam,
    visitor: req.body.awayTeam,
    startTime: {
      day1: req.body.dayOne,
      day2: req.body.dayTwo
    },
    tossWonBy: req.body.toss,
    chooseTo: req.body.choice,
    inns: innobj,
    groundAssessment: {
      pitchPreperation: req.body.pitchPreperation,
      PitchMarkings: req.body.pitchMarkings,
      boundryMarks: req.body.boundryMarkings,
      outfeild: req.body.Outfield,
      spritOfTheGame: req.body.gameSprit
    },
    batsmanScore: req.body.batsmen,
    bowlerScore: req.body.bowler,
    extra: {
      wides: req.body.wides,
      noBalls: req.body.noBalls,
      byes: req.body.byes,
      legByes: req.body.legByes
    }
  });

  match.save((err, results) => {
    if (err) {
      console.log("unable to add match");
    } else {
      console.log(results);
    }
  });
};

exports.added = (req, res) => {
  res.write("form added");
  res.end();
};

function createInns(res) {
  const arr = [];

  var i;
  for (i = 0; i < 4; i++) {
    var team = "teamInns" + (i + 1);
    var runs = "runsInns" + (i + 1);
    var wkts = "wktsInns" + (i + 1);
    var obj = {
      inn: i + 1,
      team: res.body[team],
      runs: res.body[runs],
      wkts: res.body[wkts]
    };

    arr.push(obj);
  }

  return arr;
}
