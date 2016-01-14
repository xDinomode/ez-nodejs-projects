//create a server on port 3000

var http = require("http");

http.createServer(function(request, response){
  response.write("Hello there!");
  response.end();
}).listen(3000);
