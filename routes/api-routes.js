var liveResult = require("../models/liveResult.js");
var login = require("../models/login.js");
var userData = require("../models/userBracket.js");


module.exports = function (app) {
    app.get("/api/liveResults", function (req, res) {
       liveResult.findAll({}).then((results) => res.json(results));
    });

    

    app.get("/api/userBrackets", function (req, res) {
        userBracket.findAll({}).then((results) => res.json(results));
    });

    // Need post route for userBrackets table

//get route to get all user logins
    app.get("/api/logins", function (req, res) {
        login.findAll({
        }).then((results) => res.json(results));
    });
    // Need post route for to add new user to logins table
    app.post("/api/logins", function (req, res) {
        login.create(req.body).then(function (dblogin) {
            res.json(dblogin);
        });
    });

}