var liveResult = require("../models/liveResult.js");
var login = require("../models/login.js");
var userBracket = require("../models/userBracket.js");

module.exports = function (app) {
    app.get("/api/liveResults", function (req, res) {
        liveResult.findAll({}).then((results) => res.json(results));
    });

    app.get("/api/userBrackets", function (req, res) {
        userBracket.findAll({}).then((data) => res.json(data));
    });
    app.get("/api/userBrackets/:userid", function (req, res) {
        userBracket.findAll({
            where: {
                userID: req.params.userid
            }
        }).then((data) => res.json(data));
    });
    // Need post route for userBrackets table
    app.post("/api/userBrackets", function (req, res) {
        userBracket.create(req.body).then(function (dbuserBracket) {
            res.json(dbuserBracket);
        });
    });
    //get route to get all user logins
    app.get("/api/logins", function (req, res) {
        login.findAll({
        }).then((results) => res.json(results));
    });

    //get route for the user login with specific loginemail
    app.get("/api/logins/:loginEmail", function (req, res) {
        login.findOne({
            where: {
                loginEmail: req.params.loginEmail
            }
        }).then((data) => res.json(data));
    })

    // Need post route for to add new user to logins table
    app.post("/api/logins", function (req, res) {
        login.create(req.body).then(function (dblogin) {
            res.json(dblogin);
        });
    });

}