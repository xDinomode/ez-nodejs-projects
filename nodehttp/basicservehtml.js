//serves an html file on port 4000
//requires a basic index.html file in the same directory as this

var http = require("http");
var fs = require("fs");

http.createServer(function(req, res){
    var html = fs.createReadStream("index.html");
    html.pipe(res);
    html.on("end", function(){
      res.end();
    });
}).listen(4000);
