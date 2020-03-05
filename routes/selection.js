// jshint esversion:6

const express = require("express");
const router = express.Router();

const selectorController = require("../controllers/selection");

router.get("/",selectorController.send_form);


//router.post("/",selectorController.posted_form);

module.exports = router;