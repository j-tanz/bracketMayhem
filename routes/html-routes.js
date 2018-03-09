
var path = require("path");

module.exports = function(app) {
  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});
  app.get("/index", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  app.get("/signup", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/signup.html"));
  });


  app.get("/login", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  app.get("/bracket", function(req, res) {
    res.sendFile(path.join(__dirname, "../bracket/index.html"));
  });

<<<<<<< HEAD
  app.get("/userbracket", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/bracket.html"));
  });
=======
  app.get("/bracket/bracket.js", function(req, res){
    res.sendFile(path.join(__dirname, "../bracket/bracket.js"))
  })
>>>>>>> 2dd2b805ac99113561d47641d91f3fd6f3928b22
};