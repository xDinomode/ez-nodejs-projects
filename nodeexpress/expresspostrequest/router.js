var express = require("express");
var router = express.Router();

router.get("/", function(req, resp){
  resp.send("<form action = '/' method = 'POST'> <input type = 'text' name = 'firstname'> <input type = 'submit' value = 'submit'> </form>");
});

router.post("/", function(req, resp){
  resp.send("Hello " + req.body.firstname);
});

module.exports = router;
