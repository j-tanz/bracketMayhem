var Sequelize = require("sequelize");
var sequelize = require("../config/connection.js");


var userBracket = sequelize.define("userBracket", {
    userID: {
        type: Sequelize.INTEGER
    },
    bracketName: {
        type: Sequelize.STRING
    },
    R2W1: {
        type: Sequelize.STRING
    },
    R2W2: {
        type: Sequelize.STRING
    },
    R2W3: {
        type: Sequelize.STRING
    },
    R2W4: {
        type: Sequelize.STRING
    },
    R2W5: {
        type: Sequelize.STRING
    },

    R2W6: {
        type: Sequelize.STRING
    },

    R2W7: {
        type: Sequelize.STRING
    },

    R2W8: {
        type: Sequelize.STRING
    },

    R2X1: {
        type: Sequelize.STRING
    },

    R2X2: {
        type: Sequelize.STRING
    },

    R2X3: {
        type: Sequelize.STRING
    },

    R2X4: {
        type: Sequelize.STRING
    },
    R2X5: {
        type: Sequelize.STRING
    },
    R2X6: {
        type: Sequelize.STRING
    },

    R2X7: {
        type: Sequelize.STRING
    },

    R2X8: {
        type: Sequelize.STRING
    },

    R2Y1: {
        type: Sequelize.STRING
    },

    R2Y2: {
        type: Sequelize.STRING
    },

    R2Y3: {
        type: Sequelize.STRING
    },

    R2Y4: {
        type: Sequelize.STRING
    },

    R2Y5: {
        type: Sequelize.STRING
    },

    R2Y6: {
        type: Sequelize.STRING
    },

    R2Y7: {
        type: Sequelize.STRING
    },

    R2Y8: {
        type: Sequelize.STRING
    },

    R2Z1: {
        type: Sequelize.STRING
    },

    R2Z2: {
        type: Sequelize.STRING
    },

    R2Z3: {
        type: Sequelize.STRING
    },

    R2Z4: {
        type: Sequelize.STRING
    },

    R2Z5: {
        type: Sequelize.STRING
    },

    R2Z6: {
        type: Sequelize.STRING
    },

    R2Z7: {
        type: Sequelize.STRING
    },

    R2Z8: {
        type: Sequelize.STRING
    },

    R3W1: {
        type: Sequelize.STRING
    },

    R3W2: {
        type: Sequelize.STRING
    },

    R3W3: {
        type: Sequelize.STRING
    },

    R3W4: {
        type: Sequelize.STRING
    },

    R3X1: {
        type: Sequelize.STRING
    },

    R3X2: {
        type: Sequelize.STRING
    },

    R3X3: {
        type: Sequelize.STRING
    },

    R3X4: {
        type: Sequelize.STRING
    },

    R3Y1: {
        type: Sequelize.STRING
    },

    R3Y2: {
        type: Sequelize.STRING
    },

    R3Y3: {
        type: Sequelize.STRING
    },

    R3Y4: {
        type: Sequelize.STRING
    },

    R3Z1: {
        type: Sequelize.STRING
    },

    R3Z2: {
        type: Sequelize.STRING
    },

    R3Z3: {
        type: Sequelize.STRING
    },

    R3Z4: {
        type: Sequelize.STRING
    },

    R4W1: {
        type: Sequelize.STRING
    },

    R4W2: {
        type: Sequelize.STRING
    },

    R4X1: {
        type: Sequelize.STRING
    },

    R4X2: {
        type: Sequelize.STRING
    },
    R4Y1: {
        type: Sequelize.STRING
    },

    R4Y2: {
        type: Sequelize.STRING
    },

    R4Z1: {
        type: Sequelize.STRING
    },

    R4Z2: {
        type: Sequelize.STRING
    },

    R5WX1: {
        type: Sequelize.STRING
    },

    R5WX2: {
        type: Sequelize.STRING
    },

    R5YZ1: {
        type: Sequelize.STRING
    },

    R5YZ2: {
        type: Sequelize.STRING
    },

    R6C1: {
        type: Sequelize.STRING
    },

    R6C1: {
        type: Sequelize.STRING
    },

    CHAMP: {
        type: Sequelize.STRING
    }
},
    {
        timestamps: false
    });

userBracket.associate = function(models) {
    userBracket.belongsTo(models.keyFile)
}

userBracket.sync();
module.exports = userBracket;