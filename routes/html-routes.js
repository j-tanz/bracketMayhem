
var path = require("path");

module.exports = function (app) {
  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
  
  app.get("/index", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  app.get("/loggedin", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/loggedin.html"));
  });

  app.get("/bracket", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/bracket/tourney.html"));
  });

  app.get("/newbracket", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/bracket/userBracket.html"));
  });

  app.get("/savedbracket", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/bracket/savedBracket.html"));
  });
};