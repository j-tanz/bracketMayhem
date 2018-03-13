var Sequelize = require("sequelize");
var sequelize = require("../config/connection.js");

var liveResult = sequelize.define("liveResult", {
  Seed_Alias: {
    type: Sequelize.STRING
  },
  Region_Seed: {
    type: Sequelize.STRING
  },
  TeamName: {
    type: Sequelize.STRING
  },
  game1: {
    type: Sequelize.BOOLEAN
  },
  game2: {
    type: Sequelize.BOOLEAN
  },
  game3: {
    type: Sequelize.BOOLEAN
  },
  game4: {
    type: Sequelize.BOOLEAN
  },
  game5: {
    type: Sequelize.BOOLEAN
  },
  game6: {
    type: Sequelize.BOOLEAN
  }
}, {
    timestamps: false
  });

liveResult.sync();
module.exports = liveResult;