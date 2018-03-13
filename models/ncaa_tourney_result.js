var Sequelize = require("sequelize");
var sequelize = require("../config/connection.js");

var ncaa_tourney_result = sequelize.define("ncaa_tourney_result", {
  Season: {
    type: Sequelize.INTEGER,
  },
  DayNum: {
    type: Sequelize.INTEGER
  },
  WTeamID: {
    type: Sequelize.INTEGER
  },
  WScore: {
    type: Sequelize.INTEGER
  },
  LTeamID: {
    type: Sequelize.INTEGER
  },
  LScore: {
    type: Sequelize.INTEGER
  },
  WLoc: {
    type: Sequelize.INTEGER
  },
  NumOT: {
    type: Sequelize.INTEGER
  },
  WFGM: {
    type: Sequelize.INTEGER
  },
  WFGA: {
    type: Sequelize.INTEGER
  },
  WFGM3: {
    type: Sequelize.INTEGER
  },
  WFGA3: {
    type: Sequelize.INTEGER
  },
  WFTM: {
    type: Sequelize.INTEGER
  },
  WFTA: {
    type: Sequelize.INTEGER
  },
  WOR: {
    type: Sequelize.INTEGER
  },
  WDR: {
    type: Sequelize.INTEGER
  },
  WAst: {
    type: Sequelize.INTEGER
  },
  WTO: {
    type: Sequelize.INTEGER
  },
  WStl: {
    type: Sequelize.INTEGER
  },
  WBlk: {
    type: Sequelize.INTEGER
  },
  WPF: {
    type: Sequelize.INTEGER
  },
  LFGM: {
    type: Sequelize.INTEGER
  },
  LFGA: {
    type: Sequelize.INTEGER
  },
  LFGM3: {
    type: Sequelize.INTEGER
  },
  LFGA3: {
    type: Sequelize.INTEGER
  },
  LFTM: {
    type: Sequelize.INTEGER
  },
  LFTA: {
    type: Sequelize.INTEGER
  },
  LOR: {
    type: Sequelize.INTEGER
  },
  LDR: {
    type: Sequelize.INTEGER
  },
  LAst: {
    type: Sequelize.INTEGER
  },
  LTO: {
    type: Sequelize.INTEGER
  },
  LStl: {
    type: Sequelize.INTEGER
  },
  LBlk: {
    type: Sequelize.INTEGER
  },
  LPF: {
    type: Sequelize.INTEGER
  },

}, {
    timestamps: false
  });

ncaa_tourney_result.sync();
module.exports = ncaa_tourney_result;