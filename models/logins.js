
var Sequelize = require("sequelize");
var sequelize = require("../config/connection.js");

var login = sequelize.define("login", {
    loginEmail: {
      type: Sequelize.STRING
    },
    loginPassword: {
      type: Sequelize.STRING 
    }
  }, {
    timestamps: false
  });

login.sync();
module.exports = login;