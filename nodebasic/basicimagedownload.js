//Downloads and saves an image from imgur

var http = require("http");
var fs = require("fs");

var writeStream = fs.createWriteStream("ourImage.jpg");

http.request({
  host: "i.imgur.com",
  path: "/gmRbksB.jpg"
}, function(response){
  response.on("data", function(data){
    writeStream.write(data);
  });
}).end();
