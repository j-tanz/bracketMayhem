var Sequelize = require("sequelize");
var sequelize = require("../config/connection.js");

var masterKey = sequelize.define("2018_ncaa_tourney_key", {
  YEAR: {
    type: Sequelize.INTEGER,
    // unique: true
  },
  SEED: {
    type: Sequelize.TEXT
  },
  TEAM_ID: {
    type: Sequelize.INTEGER
  },
  TEAM_NAME: {
    type: Sequelize.TEXT
  },
  SEED_ALIAS: {
    type: Sequelize.TEXT
  }
}, {
    timestamps: false
  });

masterKey.sync();
module.exports = masterKey;