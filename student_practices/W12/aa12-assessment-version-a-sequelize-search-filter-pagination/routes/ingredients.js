const express = require('express');
const router = express.Router();

const { Ingredient } = require('../db/models');

router.get('/', async (req, res) => {
  let { page, size } = req.query;

  page = parseInt(page);
  size = parseInt(size);

  if (Number.isNaN(page) || page <= 0) page = 1;
  if (Number.isNaN(size) || size <= 0) size = 4;

  const ingredients = await Ingredient.findAll({
    limit: size,
    offset: size * (page - 1),
  });

  return res.json({
    ingredients,
    page,
  });
});

module.exports = router;