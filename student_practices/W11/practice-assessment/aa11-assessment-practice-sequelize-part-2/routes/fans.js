const express = require("express");
const router = express.Router();
const { Fan, Player } = require("../db/models");

router.get("/:fanId/drafts", async (req, res) => {
    const fan = await Fan.findByPk(req.params.fanId, {
        include: Player,
    });
    // console.log(fan);
    res.json(fan.Players);
});

router.delete("/:id", async (req, res) => {
    const { id } = req.params;
    const fan = await Fan.findByPk(id);
    await fan.destroy();
    res.json({
        message: "Successfully deleted",
    });
});

module.exports = router;
