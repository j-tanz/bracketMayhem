var db = require('./connection'),
  sequelize = db.sequelize,
  Sequelize = db.Sequelize;

module.exports = function (sequelize, DataTypes) {
    var userBracket = sequelize.define("userBracket", {
        userID: {
            type: DataTypes.STRING
        },
        winner1: {
            type: DataTypes.NUMBER
        },
        winner2: {
            type: DataTypes.NUMBER
        },
        winner3: {
            type: DataTypes.NUMBER
        },
        winner4: {
            type: DataTypes.NUMBER
        },

        winner5: {
            type: DataTypes.NUMBER
        },

        winner6: {
            type: DataTypes.NUMBER
        },

        winner7: {
            type: DataTypes.NUMBER
        },

        winner8: {
            type: DataTypes.NUMBER
        },

        winner9: {
            type: DataTypes.NUMBER
        },

        winner10: {
            type: DataTypes.NUMBER
        },

        winner11: {
            type: DataTypes.NUMBER
        },

        winner12: {
            type: DataTypes.NUMBER
        },
        winner13: {
            type: DataTypes.NUMBER
        },
        winner14: {
            type: DataTypes.NUMBER
        },

        winner15: {
            type: DataTypes.NUMBER
        },

        winner16: {
            type: DataTypes.NUMBER
        },

        winner17: {
            type: DataTypes.NUMBER
        },

        winner18: {
            type: DataTypes.NUMBER
        },

        winner19: {
            type: DataTypes.NUMBER
        },

        winner20: {
            type: DataTypes.NUMBER
        },

        winner21: {
            type: DataTypes.NUMBER
        },

        winner22: {
            type: DataTypes.NUMBER
        },

        winner23: {
            type: DataTypes.NUMBER
        },

        winner24: {
            type: DataTypes.NUMBER
        },

        winner25: {
            type: DataTypes.NUMBER
        },

        winner26: {
            type: DataTypes.NUMBER
        },

        winner27: {
            type: DataTypes.NUMBER
        },

        winner28: {
            type: DataTypes.NUMBER
        },

        winner29: {
            type: DataTypes.NUMBER
        },

        winner30: {
            type: DataTypes.NUMBER
        },

        winner31: {
            type: DataTypes.NUMBER
        },

        winner32: {
            type: DataTypes.NUMBER
        },

        winner33: {
            type: DataTypes.NUMBER
        },

        winner34: {
            type: DataTypes.NUMBER
        },

        winner35: {
            type: DataTypes.NUMBER
        },

        winner36: {
            type: DataTypes.NUMBER
        },

        winner37: {
            type: DataTypes.NUMBER
        },

        winner38: {
            type: DataTypes.NUMBER
        },

        winner39: {
            type: DataTypes.NUMBER
        },

        winner40: {
            type: DataTypes.NUMBER
        },

        winner41: {
            type: DataTypes.NUMBER
        },

        winner42: {
            type: DataTypes.NUMBER
        },

        winner43: {
            type: DataTypes.NUMBER
        },

        winner44: {
            type: DataTypes.NUMBER
        },

        winner45: {
            type: DataTypes.NUMBER
        },

        winner46: {
            type: DataTypes.NUMBER
        },

        winner47: {
            type: DataTypes.NUMBER
        },

        winner48: {
            type: DataTypes.NUMBER
        },

        winner49: {
            type: DataTypes.NUMBER
        },

        winner50: {
            type: DataTypes.NUMBER
        },

        winner51: {
            type: DataTypes.NUMBER
        },

        winner52: {
            type: DataTypes.NUMBER
        },
        winner53: {
            type: DataTypes.NUMBER
        },

        winner54: {
            type: DataTypes.NUMBER
        },

        winner55: {
            type: DataTypes.NUMBER
        },

        winner56: {
            type: DataTypes.NUMBER
        },

        winner57: {
            type: DataTypes.NUMBER
        },

        winner58: {
            type: DataTypes.NUMBER
        },

        winner59: {
            type: DataTypes.NUMBER
        },

        winner60: {
            type: DataTypes.NUMBER
        },

        winner61: {
            type: DataTypes.NUMBER
        },

        winner62: {
            type: DataTypes.NUMBER
        },

        winner63: {
            type: DataTypes.NUMBER
        }
    },
        {
            timestamps: false
        });

    userBracket.sync();
    return userBracket;
}