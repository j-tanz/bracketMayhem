var db = require('./connection'),
  sequelize = db.sequelize,
  Sequelize = db.Sequelize;


module.exports = function(sequelize, DataTypes) {
 var login = sequelize.define("login", {
    loginEmail: DataTypes.STRING,
    loginPassword: DataTypes.STRING, 
    timestamps: false
  });

login.sync();
return login;
}