const express = require('express');
const router = express.Router();
const { Team, Player, Sport } = require("../db/models")

router.post("/:id/players", async (req, res) => {
    const { id } = req.params;
    const team = await Team.findByPk(id);
    const { firstName, lastName, number, isRetired } = req.body;
    const player = await team.createTeamRoster({ firstName, lastName, number, isRetired });
    // above function was previously createPlayer, changed because aliasing
    res.json(player);
})

router.get("/:id", async (req, res) => {
    const { id } = req.params;
    const team = Team.findByPk(id, {
        include: [
            Sport,
            {
                model: Player,
                as: "TeamRoster"
            }
        ]
    });
    res.json(team);
})

module.exports = router;
