"use strict";

const { Car } = require("../models");

// DON'T SPEND ALL YOUR TIME MAKING REAL SEED DATA!!!
// Try to just spend only 5 minutes to create the seed data for testing
// You do not need to put in real car data as values! The data values
// just need to make sense based from the migration and model files.

const validCars = [
    // Your code here
    {
        make: "Volkswagen",
        model: "GTI",
        modelYear: 2014,
        bodyStyle: "BODYSTYLE",
        trimLevel: "drivers",
        milesPerGallon: 20.1,
    },
    {
        make: "Volkswagen",
        model: "GTI",
        modelYear: 2014,
        bodyStyle: "BODYSTYLE",
        trimLevel: "betterversion",
        milesPerGallon: 30,
    },
    {
        make: "Volkswagen",
        model: "GTI",
        modelYear: 2020,
        bodyStyle: "BODYSTYLE",
        trimLevel: "ecar",
        powertrain: "electric",
    },
];

module.exports = {
    async up(queryInterface, Sequelize) {
        try {
            await Car.bulkCreate(validCars, {
                validate: true,
            });
        } catch (err) {
            console.log(err);
            throw err;
        }
    },

    async down(queryInterface, Sequelize) {
        for (let carInfo of validCars) {
            try {
                await Car.destroy({
                    where: carInfo,
                });
            } catch (err) {
                console.log(err);
                throw err;
            }
        }
    },
    // DO NOT MODIFY BELOW (for testing purposes):
    validCars,
};
