//handles post requests
//requires body-parser module
//npm install --save body-parser

var express = require("express");
var app = express();
var router = require("./router.js");

var bodyParser = require("body-parser");

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(bodyParser());

app.use("/", router);

app.listen(4000);
