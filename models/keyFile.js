var Sequelize = require("sequelize");
var sequelize = require("../config/connection.js");

var keyFile = sequelize.define("2018_ncaa_tourney_key", {
    YEAR: {
        type: Sequelize.INTEGER
    },
    SEED: {
        type: Sequelize.STRING
    },
    TEAM_ID: {
        type: Sequelize.INTEGER
    },
    TEAM_NAME: {
        type: Sequelize.STRING
    },
    SEED_ALIAS: {
        type: Sequelize.STRING
    }
   
  }, {
      timestamps: false
    });
  
  keyFile.sync();
  module.exports = keyFile;