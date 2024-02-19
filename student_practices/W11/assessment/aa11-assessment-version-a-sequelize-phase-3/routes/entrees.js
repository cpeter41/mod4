const express = require('express');
const router = express.Router();
// Your code here 
const { Entree } = require("../db/models");

router.get("/", async (req, res) => {
    const entreeList = await Entree.findAll({
        order: [["price", "DESC"], ["name"]]
    });
    res.json(entreeList);
});

module.exports = router;
