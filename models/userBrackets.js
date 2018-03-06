var Sequelize = require("sequelize");
var sequelize = require("../config/connection.js");

var userBracket = sequelize.define("userBracket", {
    userID: {
        type: Sequelize.STRING
    },
    winner1: {
        type: Sequelize.NUMBER
    },
    winner2: {
        type: Sequelize.NUMBER
    },
    winner3: {
        type: Sequelize.NUMBER
    },
    winner4: {
        type: Sequelize.NUMBER
    },

    winner5: {
        type: Sequelize.NUMBER
    },

    winner6: {
        type: Sequelize.NUMBER
    },

    winner7: {
        type: Sequelize.NUMBER
    },

    winner8: {
        type: Sequelize.NUMBER
    },

    winner9: {
        type: Sequelize.NUMBER
    },

    winner10: {
        type: Sequelize.NUMBER
    },

    winner11: {
        type: Sequelize.NUMBER
    },

    winner12: {
        type: Sequelize.NUMBER
    },
    winner13: {
        type: Sequelize.NUMBER
    },
    winner14: {
        type: Sequelize.NUMBER
    },

    winner15: {
        type: Sequelize.NUMBER
    },

    winner16: {
        type: Sequelize.NUMBER
    },

    winner17: {
        type: Sequelize.NUMBER
    },

    winner18: {
        type: Sequelize.NUMBER
    },

    winner19: {
        type: Sequelize.NUMBER
    },

    winner20: {
        type: Sequelize.NUMBER
    },

    winner21: {
        type: Sequelize.NUMBER
    },

    winner22: {
        type: Sequelize.NUMBER
    },

    winner23: {
        type: Sequelize.NUMBER
    },

    winner24: {
        type: Sequelize.NUMBER
    },

    winner25: {
        type: Sequelize.NUMBER
    },

    winner26: {
        type: Sequelize.NUMBER
    },

    winner27: {
        type: Sequelize.NUMBER
    },

    winner28: {
        type: Sequelize.NUMBER
    },

    winner29: {
        type: Sequelize.NUMBER
    },

    winner30: {
        type: Sequelize.NUMBER
    },

    winner31: {
        type: Sequelize.NUMBER
    },

    winner32: {
        type: Sequelize.NUMBER
    },

    winner33: {
        type: Sequelize.NUMBER
    },

    winner34: {
        type: Sequelize.NUMBER
    },

    winner35: {
        type: Sequelize.NUMBER
    },

    winner36: {
        type: Sequelize.NUMBER
    },

    winner37: {
        type: Sequelize.NUMBER
    },

    winner38: {
        type: Sequelize.NUMBER
    },

    winner39: {
        type: Sequelize.NUMBER
    },

    winner40: {
        type: Sequelize.NUMBER
    },

    winner41: {
        type: Sequelize.NUMBER
    },

    winner42: {
        type: Sequelize.NUMBER
    },

    winner43: {
        type: Sequelize.NUMBER
    },

    winner44: {
        type: Sequelize.NUMBER
    },

    winner45: {
        type: Sequelize.NUMBER
    },

    winner46: {
        type: Sequelize.NUMBER
    },

    winner47: {
        type: Sequelize.NUMBER
    },

    winner48: {
        type: Sequelize.NUMBER
    },

    winner49: {
        type: Sequelize.NUMBER
    },

    winner50: {
        type: Sequelize.NUMBER
    },

    winner51: {
        type: Sequelize.NUMBER
    },

    winner52: {
        type: Sequelize.NUMBER
    },
    winner53: {
        type: Sequelize.NUMBER
    },

    winner54: {
        type: Sequelize.NUMBER
    },

    winner55: {
        type: Sequelize.NUMBER
    },

    winner56: {
        type: Sequelize.NUMBER
    },

    winner57: {
        type: Sequelize.NUMBER
    },

    winner58: {
        type: Sequelize.NUMBER
    },

    winner59: {
        type: Sequelize.NUMBER
    },

    winner60: {
        type: Sequelize.NUMBER
    },

    winner61: {
        type: Sequelize.NUMBER
    },

    winner62: {
        type: Sequelize.NUMBER
    },

    winner63: {
        type: Sequelize.NUMBER
    }
},
    {
        timestamps: false
    });

userBracket.sync();
module.exports = userBracket;