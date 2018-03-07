var express = require("express");
var bodyParser = require("body-parser");
var path = require("path")
var app = express();
var dir = path.join(__dirname, '/public');
var db = require("./models/connection");
var PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use(express.static(dir));

require("./routes/html-routes")(app);
require("./routes/api-routes")(app);

app.listen(PORT, function() {
    console.log("listening on : " + PORT);
});