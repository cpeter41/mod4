require("express-async-errors");
require("dotenv").config();
const express = require("express");
const app = express();
const { WarehouseItem } = require("./db/models");

app.use(express.json());

app.get("/items", async (req, res) => {
    const result = await WarehouseItem.findAll({
        where: { isUsed: false },
    });

    res.json(result);
});

app.put("/items/:itemId", async (req, res) => {
    const foundItem = await WarehouseItem.findByPk(req.params.itemId);

    if (!foundItem) {
        res.status(404);
        res.json({
            message: "Warehouse Item not found",
        });
    }
    else {
        const { name, price, quantity, isUsed } = req.body;
        if (name) foundItem.name = name;
        if (price) foundItem.price = price;
        if (quantity) foundItem.quantity = quantity;
        if (isUsed) foundItem.isUsed = isUsed;
        await foundItem.save();

        res.json(foundItem);
    }
});

if (require.main === module) {
    const port = 8003;
    app.listen(port, () => console.log("Server-3 is listening on port", port));
} else {
    module.exports = app;
}
