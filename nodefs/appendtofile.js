//appends to an already created file
var fs = require("fs");

fs.appendFile("hi.txt", "More text to add", function(err){
  if(err) throw err;
  console.log("File appended to");
});
