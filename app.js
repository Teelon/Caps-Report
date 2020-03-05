//jshint esversion:6

const express= require("express");
const http = require('http');
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const axios = require('axios').default;

const app= express();
app.set('view engine', 'ejs'); 
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

// routes for program.
const report = require("./routes/report");
const team = require("./routes/team");
const selection = require("./routes/selection");

//Send for routes
app.use("/report",report);
app.use("/team",team);
app.use("/",selection);



mongoose.connect(process.env.DB_LINK, {useNewUrlParser: true, useUnifiedTopology: true});

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("connected to db");
});





app.listen(process.env.PORT || 3000, function(){
    console.log("Server started on port 3000");
});

