
var express = require("express");
var bodyParser = require("body-parser");
// var sequelize = require("sequelize")
var path = require("path");
var app = express();
var PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static("public"));
// require("./models/liveResult.js")(app);

require("./routes/html-routes")(app);
require("./routes/api-routes")(app);

// db.sequelize.sync({ force: true }).then(function() {
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});
// });
