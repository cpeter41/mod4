"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Package extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Package.init(
        {
            trackingNumber: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
                validate: {
                    len: [10, 10],
                    isNumeric: true,
                },
            },
            weightKg: {
                type: DataTypes.INTEGER,
                allowNull: false,
                validate: {
                    min: 2,
                    max: 80,
                },
            },
            sender: {
                type: DataTypes.STRING,
            },
            recipient: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    isFirstLast(val) {
                        if (val.split(" ").length < 2) {
                            throw new Error(
                                "Recipient needs a first and last name."
                            );
                        }
                    },
                },
            },
            isDelivered: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
            },
        },
        {
            sequelize,
            modelName: "Package",
        }
    );
    return Package;
};
