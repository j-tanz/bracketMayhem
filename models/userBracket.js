var Sequelize = require("sequelize");
var sequelize = require("../config/connection.js");


var userBracket = sequelize.define("userBracket", {
    userID: {
        type: Sequelize.STRING
    },
    bracketName: {
        type: Sequelize.STRING
    },
    winner1: {
        type: Sequelize.INTEGER
    },
    winner2: {
        type: Sequelize.INTEGER
    },
    winner3: {
        type: Sequelize.INTEGER
    },
    winner4: {
        type: Sequelize.INTEGER
    },

    winner5: {
        type: Sequelize.INTEGER
    },

    winner6: {
        type: Sequelize.INTEGER
    },

    winner7: {
        type: Sequelize.INTEGER
    },

    winner8: {
        type: Sequelize.INTEGER
    },

    winner9: {
        type: Sequelize.INTEGER
    },

    winner10: {
        type: Sequelize.INTEGER
    },

    winner11: {
        type: Sequelize.INTEGER
    },

    winner12: {
        type: Sequelize.INTEGER
    },
    winner13: {
        type: Sequelize.INTEGER
    },
    winner14: {
        type: Sequelize.INTEGER
    },

    winner15: {
        type: Sequelize.INTEGER
    },

    winner16: {
        type: Sequelize.INTEGER
    },

    winner17: {
        type: Sequelize.INTEGER
    },

    winner18: {
        type: Sequelize.INTEGER
    },

    winner19: {
        type: Sequelize.INTEGER
    },

    winner20: {
        type: Sequelize.INTEGER
    },

    winner21: {
        type: Sequelize.INTEGER
    },

    winner22: {
        type: Sequelize.INTEGER
    },

    winner23: {
        type: Sequelize.INTEGER
    },

    winner24: {
        type: Sequelize.INTEGER
    },

    winner25: {
        type: Sequelize.INTEGER
    },

    winner26: {
        type: Sequelize.INTEGER
    },

    winner27: {
        type: Sequelize.INTEGER
    },

    winner28: {
        type: Sequelize.INTEGER
    },

    winner29: {
        type: Sequelize.INTEGER
    },

    winner30: {
        type: Sequelize.INTEGER
    },

    winner31: {
        type: Sequelize.INTEGER
    },

    winner32: {
        type: Sequelize.INTEGER
    },

    winner33: {
        type: Sequelize.INTEGER
    },

    winner34: {
        type: Sequelize.INTEGER
    },

    winner35: {
        type: Sequelize.INTEGER
    },

    winner36: {
        type: Sequelize.INTEGER
    },

    winner37: {
        type: Sequelize.INTEGER
    },

    winner38: {
        type: Sequelize.INTEGER
    },

    winner39: {
        type: Sequelize.INTEGER
    },

    winner40: {
        type: Sequelize.INTEGER
    },

    winner41: {
        type: Sequelize.INTEGER
    },

    winner42: {
        type: Sequelize.INTEGER
    },

    winner43: {
        type: Sequelize.INTEGER
    },

    winner44: {
        type: Sequelize.INTEGER
    },

    winner45: {
        type: Sequelize.INTEGER
    },

    winner46: {
        type: Sequelize.INTEGER
    },

    winner47: {
        type: Sequelize.INTEGER
    },

    winner48: {
        type: Sequelize.INTEGER
    },

    winner49: {
        type: Sequelize.INTEGER
    },

    winner50: {
        type: Sequelize.INTEGER
    },

    winner51: {
        type: Sequelize.INTEGER
    },

    winner52: {
        type: Sequelize.INTEGER
    },
    winner53: {
        type: Sequelize.INTEGER
    },

    winner54: {
        type: Sequelize.INTEGER
    },

    winner55: {
        type: Sequelize.INTEGER
    },

    winner56: {
        type: Sequelize.INTEGER
    },

    winner57: {
        type: Sequelize.INTEGER
    },

    winner58: {
        type: Sequelize.INTEGER
    },

    winner59: {
        type: Sequelize.INTEGER
    },

    winner60: {
        type: Sequelize.INTEGER
    },

    winner61: {
        type: Sequelize.INTEGER
    },

    winner62: {
        type: Sequelize.INTEGER
    }
},
    {
        timestamps: false
    });

userBracket.sync();
module.exports = userBracket;