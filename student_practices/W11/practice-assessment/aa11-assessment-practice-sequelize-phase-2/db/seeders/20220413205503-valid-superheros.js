"use strict";

const { Superhero } = require("../models");

// DON'T SPEND ALL YOUR TIME MAKING REAL SEED DATA!!!
// Try to just spend only 5 minutes to create the seed data for testing
// You do not need to put in real superhero data as values! The data values
// just need to make sense based from the migration and model files.

const validSuperheros = [
    // Your code here
    {
        name: "JILL",
        alias: "The Rizzler",
        affiliation: "X-Men",
        heightCm: 153,
        race: "human",
        universe: "Marvel",
        releaseYear: 1993
    },
    {
        name: "CHRIS",
        alias: "The Rizzler 2",
        affiliation: "X-Men",
        heightCm: 183,
        race: "human",
        universe: "Marvel",
        releaseYear: 1997
    },
    {
        name: "EDDIE",
        alias: "The Rizzler 3",
        affiliation: "Avengers",
        heightCm: 183,
        isMutant: false,
        race: "alien",
        universe: "Marvel",
        releaseYear: 1950
    },
    {
        name: "MISO",
        alias: "The Rizzler 4",
        affiliation: "Justice League",
        heightCm: 183,
        isMutant: false,
        race: "asgardian",
        universe: "DC",
        releaseYear: 1954
    },
    {
        name: "FIFTHGUY",
        alias: "The Rizzler 5",
        affiliation: "Avengers",
        heightCm: 200,
        isMutant: false,
        race: "feline",
        universe: "Marvel",
        releaseYear: 2000
    }
];

module.exports = {
    async up(queryInterface, Sequelize) {
        try {
            await Superhero.bulkCreate(validSuperheros, {
                validate: true,
            });
        } catch (err) {
            console.log(err);
            throw err;
        }
    },

    async down(queryInterface, Sequelize) {
        for (let superheroInfo of validSuperheros) {
            try {
                await Superhero.destroy({
                    where: superheroInfo,
                });
            } catch (err) {
                console.log(err);
                throw err;
            }
        }
    },
    // DO NOT MODIFY BELOW (for testing purposes):
    validSuperheros,
};
