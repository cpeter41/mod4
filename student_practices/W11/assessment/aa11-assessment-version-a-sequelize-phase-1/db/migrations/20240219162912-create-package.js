"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("Packages", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            trackingNumber: {
                type: Sequelize.STRING,
                allowNull: false,
                unique: true,
                validate: {
                    len: [10, 10],
                    isNumeric: true,
                },
            },
            weightKg: {
                type: Sequelize.INTEGER,
                allowNull: false,
                validate: {
                    min: 2,
                    max: 80,
                },
            },
            sender: {
                type: Sequelize.STRING,
            },
            recipient: {
                type: Sequelize.STRING,
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
                type: Sequelize.BOOLEAN,
                allowNull: false,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: Sequelize.literal("CURRENT_TIMESTAMP")
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: Sequelize.literal("CURRENT_TIMESTAMP")
            },
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable("Packages");
    },
};
