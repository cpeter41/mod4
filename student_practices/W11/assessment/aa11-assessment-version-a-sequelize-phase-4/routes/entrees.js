const express = require('express');
const router = express.Router();
const { Entree, Ingredient } = require("../db/models");

router.get("/recipes", async (req, res) => {
    const result = await Entree.findAll({
        include: Ingredient
    });
    res.json(result);
});

module.exports = router;