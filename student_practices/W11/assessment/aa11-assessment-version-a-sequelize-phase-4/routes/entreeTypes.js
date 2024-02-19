const express = require("express");
const router = express.Router();
const { Entree, EntreeType } = require("../db/models");

router.post("/:type/entrees", async (req, res) => {
    const { name, description, price } = req.body;

    const entreeType = await EntreeType.findOne({
        where: { type: req.params.type },
    });

    const newEntree = await Entree.create({
        name,
        description,
        price,
        entreeTypeId: entreeType.dataValues.id,
    });

    res.json(newEntree);
});

module.exports = router;
