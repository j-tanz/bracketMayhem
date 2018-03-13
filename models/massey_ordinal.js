var Sequelize = require("sequelize");
var sequelize = require("../config/connection.js");

var massey_ordinal = sequelize.define("massey_ordinal", {
  Season: {
    type: Sequelize.INTEGER,
    // unique: true
  },
  RankingDayNum: {
    type: Sequelize.INTEGER
  },
  SystemName: {
    type: Sequelize.STRING
  },
  TeamID: {
    type: Sequelize.INTEGER
  },
  OrdinalRank: {
    type: Sequelize.INTEGER
  }
}, {
    timestamps: false
  });

massey_ordinal.sync();
module.exports = massey_ordinal;