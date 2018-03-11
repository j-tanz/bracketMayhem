
var path = require("path");

module.exports = function(app) {
  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/bootstrapTemp/index.html"));
});
  app.get("/index", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/bootstrapTemp/index.html"));
  });

  app.get("/signup", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/signup.html"));
  });


  app.get("/login", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  app.get("/bracket", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/bracket/index.html"));
  });

  app.get("/newbracket", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/bracket/userBracket.html"));
  });
  // app.get("/bracket/bracket.js", function(req, res){
  //   res.sendFile(path.join(__dirname, "../bracket/bracket.js"))
  // })
};