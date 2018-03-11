var Sequelize = require("sequelize");
var sequelize = require("../config/connection.js");


var userBracket = sequelize.define("userBracket", {
    userID: {
        type: Sequelize.INTEGER
    },
    bracketName: {
        type: Sequelize.STRING
    },
    winner1: {
        type: Sequelize.STRING
    },
    winner2: {
        type: Sequelize.STRING
    },
    winner3: {
        type: Sequelize.STRING
    },
    winner4: {
        type: Sequelize.STRING
    },
    winner5: {
        type: Sequelize.STRING
    },

    winner6: {
        type: Sequelize.STRING
    },

    winner7: {
        type: Sequelize.STRING
    },

    winner8: {
        type: Sequelize.STRING
    },

    winner9: {
        type: Sequelize.STRING
    },

    winner10: {
        type: Sequelize.STRING
    },

    winner11: {
        type: Sequelize.STRING
    },

    winner12: {
        type: Sequelize.STRING
    },
    winner13: {
        type: Sequelize.STRING
    },
    winner14: {
        type: Sequelize.STRING
    },

    winner15: {
        type: Sequelize.STRING
    },

    winner16: {
        type: Sequelize.STRING
    },

    winner17: {
        type: Sequelize.STRING
    },

    winner18: {
        type: Sequelize.STRING
    },

    winner19: {
        type: Sequelize.STRING
    },

    winner20: {
        type: Sequelize.STRING
    },

    winner21: {
        type: Sequelize.STRING
    },

    winner22: {
        type: Sequelize.STRING
    },

    winner23: {
        type: Sequelize.STRING
    },

    winner24: {
        type: Sequelize.STRING
    },

    winner25: {
        type: Sequelize.STRING
    },

    winner26: {
        type: Sequelize.STRING
    },

    winner27: {
        type: Sequelize.STRING
    },

    winner28: {
        type: Sequelize.STRING
    },

    winner29: {
        type: Sequelize.STRING
    },

    winner30: {
        type: Sequelize.STRING
    },

    winner31: {
        type: Sequelize.STRING
    },

    winner32: {
        type: Sequelize.STRING
    },

    winner33: {
        type: Sequelize.STRING
    },

    winner34: {
        type: Sequelize.STRING
    },

    winner35: {
        type: Sequelize.STRING
    },

    winner36: {
        type: Sequelize.STRING
    },

    winner37: {
        type: Sequelize.STRING
    },

    winner38: {
        type: Sequelize.STRING
    },

    winner39: {
        type: Sequelize.STRING
    },

    winner40: {
        type: Sequelize.STRING
    },

    winner41: {
        type: Sequelize.STRING
    },

    winner42: {
        type: Sequelize.STRING
    },

    winner43: {
        type: Sequelize.STRING
    },

    winner44: {
        type: Sequelize.STRING
    },

    winner45: {
        type: Sequelize.STRING
    },

    winner46: {
        type: Sequelize.STRING
    },

    winner47: {
        type: Sequelize.STRING
    },

    winner48: {
        type: Sequelize.STRING
    },

    winner49: {
        type: Sequelize.STRING
    },

    winner50: {
        type: Sequelize.STRING
    },

    winner51: {
        type: Sequelize.STRING
    },

    winner52: {
        type: Sequelize.STRING
    },
    winner53: {
        type: Sequelize.STRING
    },

    winner54: {
        type: Sequelize.STRING
    },

    winner55: {
        type: Sequelize.STRING
    },

    winner56: {
        type: Sequelize.STRING
    },

    winner57: {
        type: Sequelize.STRING
    },

    winner58: {
        type: Sequelize.STRING
    },

    winner59: {
        type: Sequelize.STRING
    },

    winner60: {
        type: Sequelize.STRING
    },

    winner61: {
        type: Sequelize.STRING
    },

    winner62: {
        type: Sequelize.STRING
    },

    winner63: {
        type: Sequelize.STRING
    }
},
    {
        timestamps: false
    });

userBracket.sync();
module.exports = userBracket;