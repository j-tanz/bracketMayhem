var liveResult = require("../models/liveResult.js");
var login = require("../models/login.js");
var userBracket = require("../models/userBracket.js");
var massey = require("../models/massey_ordinal.js");
var ncaaSeedRoundSlot = require("../models/ncaa_seed_round_slot.js");
var ncaa_tourney_result = require("../models/ncaa_tourney_result.js");

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

    app.get("/api/userBrackets/:userid/:bracketname", function (req, res) {
        userBracket.findAll({
            where: {
                // userID: req.params.userid,
                bracketName: req.params.bracketname
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
    
    // app.get("/api/ncaa_seed_round_slot", function (req, res) {
    //     ncaa_seed_round_slot.findAll({
    //     }).then((results) => res.json(results));
    // });
    app.get("/api/ncaa_tourney_result", function (req, res) {
        ncaa_tourney_result.findAll({
        }).then((results) => res.json(results));
    });
    app.get("/api/ncaaSeedRoundSlot", function (req, res) {
        ncaaSeedRoundSlot.findAll({
        }).then((results) => res.json(results));
    });
    app.get("/api/massey", function (req, res) {
        massey.findAll({
        }).then((results) => res.json(results));
    });
    // app.get("/api/tourney/:loginEmail", function (req, res) {
    //    .findAll({
    //         attributes: ['foo', 'bar']
    //       }).then((data) => res.json(data));
    // })
}