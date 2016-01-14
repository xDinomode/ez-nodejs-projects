//Serves html using ejs template engine
//npm install --save ejs

var express = require("express");
var app = express();

app.set("view engine", "ejs");
app.set("views", "./views");

app.get("/", function(req, resp){
  resp.render("index");
});

app.listen(4000);
