//deletes a file, make sure the file exists before running

var fs = require("fs");

fs.unlink("fileName.txt", function(err){
  if (err) throw err;
  console.log("File deleted");
});
