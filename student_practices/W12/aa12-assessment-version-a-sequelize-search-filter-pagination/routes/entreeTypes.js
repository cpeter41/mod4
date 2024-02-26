const express = require('express');
const router = express.Router();

const { EntreeType } = require('../db/models');

router.get('/', async (req, res) => {
  // Example error response for incorrect isVegetarian search filter:
  // res.status(400);
  // return res.json({
  //    errors: [
  //      { message: 'isVegetarian should be either true or false' }
  //    ]
  // });

  const entreeTypes = await EntreeType.findAll();

  return res.json(entreeTypes);
});

module.exports = router;