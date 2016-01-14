//Basic express server

var express = require("express");
var app = express();

app.get("/", function(req, resp){
  resp.send("Hello world");
});

app.listen(4000);
