//console.log a webpage

var http = require("http");

http.request({
  host: "example.com",
  path: "/"
}, function(response){
  var webpage = " ";
  response.on("data", function(data){
    webpage += data;
  });
  response.on("end", function(){
    console.log(webpage);
  });
}).end();
