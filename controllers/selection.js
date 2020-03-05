// jshint esversion:6

const mongoose = require("mongoose");

exports.send_form = (req, res) => {
    res.render(process.cwd() + "/views/teamselection");
};

// exports.posted = (req, res) => {
    
// };