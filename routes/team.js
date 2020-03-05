// jshint esversion:6

const express = require("express");
const router = express.Router();


const teamController = require("../controllers/team");

router.get("/",teamController.send_team);

router.get("/division",teamController.send_team_division);

module.exports = router;