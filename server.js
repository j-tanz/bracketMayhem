
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var app = express();
var PORT = process.env.PORT || 8090;
// var db = require("./models");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static("public"));

require("./routes/html-routes")(app);
require("./routes/api-routes")(app);

app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});
