// jshint esversion:6

const express = require("express");
const router = express.Router();


const reportController = require("../controllers/report");

router.get("/",reportController.send_form);


router.post("/",reportController.posted_form);

router.get("/complete", reportController.added);
module.exports = router;