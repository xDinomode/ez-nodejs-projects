//creates a file

var fs = require("fs");

fs.writeFile("fileName.txt", "Text inside file goes here", function(err){
  if(err) throw err;
  console.log("file created");
});
