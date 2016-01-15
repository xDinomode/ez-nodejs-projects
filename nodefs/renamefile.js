//renames a file, make sure the .txt file exists before running

var fs = require("fs");

fs.rename("fileName.txt", "newFileName.txt", function(err){
  if(err) throw err;
  console.log("File name changed");
});
