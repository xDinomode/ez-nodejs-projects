//reads a file, make sure it exists before running

var fs = require("fs");

fs.readFile("fileName.txt", function(err, file){
  if(err) throw err;
  console.log(file.toString());
});
