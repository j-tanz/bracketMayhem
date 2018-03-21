var liveResult = require("../models/liveResult.js");
var login = require("../models/login.js");
var userBracket = require("../models/userBracket.js");
var massey = require("../models/massey_ordinal.js");
var ncaaSeedRoundSlot = require("../models/ncaa_seed_round_slot.js");
var ncaa_tourney_result = require("../models/ncaa_tourney_result.js");
var masterKey = require("../models/master_key.js");

module.exports = function (app) {
    app.get("/api/liveResults", function (req, res) {
        liveResult.findAll({}).then((results) => res.json(results));
    });
    app.get("/api/userBrackets", function (req, res) {
        userBracket.findAll({}).then((data) => res.json(data));
    });
    //Get request to show all of user's created brackets
    app.get("/api/userBrackets/:userid", function (req, res) {
        userBracket.findAll({
            where: {
                userID: req.params.userid
            }
        }).then((data) => res.json(data));
    });
    //Get request to show a specific user bracket 
    app.get("/api/userBrackets/:userid/:bracketname", function (req, res) {
        userBracket.findAll({
            where: {
                userID: req.params.userid,
                bracketName: req.params.bracketname
            }
        }).then((data) => res.json(data));
    });
    //Post request to create a new user bracket  
    app.post("/api/userBrackets", function (req, res) {
        userBracket.create(req.body).then(function (dbuserBracket) {
            res.json(dbuserBracket);
        });
    });
    //Get request to get login details of all user accounts
    app.get("/api/logins", function (req, res) {
        login.findAll({
        }).then((results) => res.json(results));
    });

    //Get route for the user login with specific loginemail
    app.get("/api/logins/:loginEmail", function (req, res) {
        login.findOne({
            where: {
                loginEmail: req.params.loginEmail
            }
        }).then((data) => res.json(data));
    })

    // Post route to add new user to logins table
    app.post("/api/logins", function (req, res) {
        login.create(req.body).then(function (dblogin) {
            res.json(dblogin);
        });
    });

    
    app.get("/api/masterKeys", function(req, res){
        masterKey.findAll({    
        }).then((results) => res.json(results));
    });
    
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
}