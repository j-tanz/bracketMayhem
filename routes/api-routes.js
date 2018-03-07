var liveResult = require("../models/liveResults.js");
var login = require("../models/logins.js");
var userData = require("../models/userBrackets.js");

module.exports = function (app) {
    app.get("/api/liveResults", function (req, res) {
        liveResult.findAll({
            where: {
                waitlisted: false
            }
        }).then((results) => res.json(results));
    });

    app.get("/api/logins", function (req, res) {
        login.findAll({
            where: {
                waitlisted: false
            }
        }).then((results) => res.json(results));
    });

    app.get("/api/userBrackets", function (req, res) {
        userBracket.findAll({
            where: {
                waitlisted: false
            }
        }).then((results) => res.json(results));
    });

// Need post route for userBrackets table
// Need post route for logins table
}