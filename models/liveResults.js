var db = require('./connection'),
  sequelize = db.sequelize,
  Sequelize = db.Sequelize;


module.exports = function(sequelize, DataTypes) {
var liveResult = sequelize.define("liveResult", {
    TeamID: DataTypes.NUMBER,
    game1: DataTypes.BOOLEAN, 
    game2: DataTypes.BOOLEAN,
    game3: DataTypes.BOOLEAN, 
    game4: DataTypes.BOOLEAN, 
    game5: DataTypes.BOOLEAN, 
    game6: DataTypes.BOOLEAN,
    timestamps: false
  });
liveResult.sync();
return liveResult;
};