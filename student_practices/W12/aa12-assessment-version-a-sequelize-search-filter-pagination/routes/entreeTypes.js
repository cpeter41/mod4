const express = require("express");
const router = express.Router();

const { EntreeType } = require("../db/models");
const { where } = require("sequelize");

router.get("/", async (req, res, next) => {
    // Example error response for incorrect isVegetarian search filter:
    // res.status(400);
    // return res.json({
    //    errors: [
    //      { message: 'isVegetarian should be either true or false' }
    //    ]
    // });
    let { isVegetarian } = req.query;
    console.log("isVeg:", isVegetarian, typeof isVegetarian);

    let where = {};

    if (isVegetarian) {
        if (isVegetarian !== "true" && isVegetarian !== "false") {
            res.status(400);
            return res.json({
                errors: [
                    { message: "isVegetarian should be either true or false" },
                ],
            });
        } else {
            isVegetarian = isVegetarian === "true" ? true : false;
            where.isVegetarian = isVegetarian;
        }
    }

    const entreeTypes = await EntreeType.findAll({
        where,
    });

    return res.json(entreeTypes);
});

module.exports = router;
