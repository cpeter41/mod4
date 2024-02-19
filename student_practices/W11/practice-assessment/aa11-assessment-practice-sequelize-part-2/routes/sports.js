const express = require('express');
const router = express.Router();

const { Sport } = require("../db/models");

router.get("/", async (req, res) => {
    const sport = await Sport.findAll({
        order: [['name', 'DESC']]
    });

    res.json(sport);
});

module.exports = router;
