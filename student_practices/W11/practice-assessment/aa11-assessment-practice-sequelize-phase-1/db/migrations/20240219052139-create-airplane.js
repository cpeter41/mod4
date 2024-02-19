"use strict";

const { DataTypes } = require("sequelize");
const airplane = require("../models/airplane");

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("Airplanes", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            airlineCode: {
                type: Sequelize.STRING,
                allowNull: false,
                validate: {
                    len: [2, 2],
                    isUppercase: true,
                    isAlpha: true,
                },
            },
            flightNumber: {
                type: Sequelize.STRING,
                allowNull: false,
                validate: {
                    isNumeric: true,
                    len: [1, 4],
                },
            },
            inService: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
                defaultValue: true,
            },
            maxNumPassengers: {
                type: Sequelize.INTEGER,
                allowNull: false,
                validate: {
                    min: 2,
                    max: 853,
                },
            },
            currentNumPassengers: {
                type: Sequelize.INTEGER,
                validate: {
                    min: 0,
                    max: 853,
                },
                isGreaterThanMax(val) {
                    if (val > this.maxNumPassengers) {
                        throw new Error("Invalid currentNumPassengers");
                    }
                },
            },
            firstFlightDate: {
                type: Sequelize.DATE,
                validate: {
                    isBefore: "2022-01-01",
                    isAfter: "2019-12-31",
                },
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
            },
        });

        await queryInterface.addConstraint("Airplanes", {
            type: "unique",
            fields: ["airlineCode", "flightNumber"],
            name: "unique_cons_airline_flight",
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.removeConstraint(
            "Airplanes",
            "unique_cons_airline_flight"
        );
        await queryInterface.dropTable("Airplanes");
    },
};
