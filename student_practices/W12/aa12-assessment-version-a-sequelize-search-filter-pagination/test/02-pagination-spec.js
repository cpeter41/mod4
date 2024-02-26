const chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../app');
chai.use(chaiHttp);
const expect = chai.expect;

const { resetDB, seedAllDB } = require('./utils/test-utils');
const { Ingredient } = require('../db/models');

describe('Pagination Specs - Ingredients', () => {
  before(async function () {
    const processArgs = process.argv;
    const lastArg = processArgs[processArgs.length - 1];
    if (lastArg.startsWith('test/02-pagination-spec')) {
      await resetDB();
      return await seedAllDB();
    }
  });
  describe('GET /ingredients', () => {
    it('paginates results as expected', async () => {
      let page = 2;
      let size = 3;
      await chai.request(server)
        .get(`/ingredients?page=${page}&size=${size}`)
        .then((res) => {
          expect(res).to.have.status(200);
          expect(res).to.be.json;
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.own.property('ingredients');
          expect(res.body.ingredients.length).to.eq(size);
          expect(res.body).to.have.own.property('page');
          expect(res.body.page).to.eq(page);
          const firstIngredient = res.body.ingredients[0];
          expect(firstIngredient).to.have.own.property('name');
          expect(firstIngredient).to.have.own.property('measurement');
          expect(res.body.ingredients.map(ingredient => ingredient.name)).to.eql([
            "Cheese",
            "Steak",
            "Chicken Breast",
          ]);
        });

      page = 'hello';
      size = undefined;
      const defaultPage = 1;
      const defaultSize = 4;
      await chai.request(server)
        .get(`/ingredients?page=${page}&size=${size}`)
        .then((res) => {
          expect(res).to.have.status(200);
          expect(res).to.be.json;
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.own.property('ingredients');
          expect(res.body.ingredients.length).to.eq(defaultSize);
          expect(res.body).to.have.own.property('page');
          expect(res.body.page).to.eq(defaultPage);
          const firstIngredient = res.body.ingredients[0];
          expect(firstIngredient).to.have.own.property('name');
          expect(firstIngredient).to.have.own.property('measurement');
          expect(res.body.ingredients.map(ingredient => ingredient.name)).to.eql([
            "Impossible Meat",
            "Chopped Lettuce",
            "Tomatoes",
            "Cheese",
          ]);
        });

      page = 6;
      size = 2
      await Ingredient.bulkCreate([
        {
          name: 'Test Ingredient 1',
          measurement: 'testing measurement 1',
        },
        {
          name: 'Test Ingredient 2',
          measurement: 'testing measurement 2',
        },
      ], { validate: true });
      await chai.request(server)
        .get(`/ingredients?page=${page}&size=${size}`)
        .then((res) => {
          expect(res).to.have.status(200);
          expect(res).to.be.json;
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.own.property('ingredients');
          expect(res.body.ingredients.length).to.eq(size);
          expect(res.body).to.have.own.property('page');
          expect(res.body.page).to.eq(page);
          const firstIngredient = res.body.ingredients[0];
          expect(firstIngredient).to.have.own.property('name');
          expect(firstIngredient).to.have.own.property('measurement');
          expect(res.body.ingredients.map(ingredient => ingredient.name)).to.eql([
            "Test Ingredient 1",
            "Test Ingredient 2",
          ]);
        });
    });
  });
});