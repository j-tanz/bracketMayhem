var Sequelize = require("sequelize");
var sequelize = require("../config/connection.js");

var ncaaSeedRoundSlot = sequelize.define("ncaa_tourney_seed_round_slot", {
  Seed: {
    type: Sequelize.STRING,
  },
  GameRound: {
    type: Sequelize.INTEGER
  },
  GameSlot: {
    type: Sequelize.STRING
  },
  EarlyDayNum: {
    type: Sequelize.INTEGER
  },
  LateDayNum: {
    type: Sequelize.INTEGER
  }
}, {
    timestamps: false
  });

ncaaSeedRoundSlot.sync();
module.exports = ncaaSeedRoundSlot;