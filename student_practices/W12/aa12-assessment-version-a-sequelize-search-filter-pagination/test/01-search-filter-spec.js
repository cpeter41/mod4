const chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../app');
chai.use(chaiHttp);
const expect = chai.expect;

const { resetDB, seedAllDB } = require('./utils/test-utils');
const { EntreeType } = require('../db/models');

describe('Search Filter Specs - Entrees', () => {
  before(async function () {
    await resetDB();
    return seedAllDB();
  });

  describe('GET /entreeTypes', () => {
    context('if isVegetarian search filter is NOT specified', () => {
      it('returns all entree types', async () => {
        await chai.request(server)
          .get('/entreeTypes')
          .then((res) => {
            expect(res).to.have.status(200);
            expect(res).to.be.json;
            expect(res.body).to.be.a('array');
            expect(res.body.length).to.eq(7);
            const firstEntreeType = res.body[0];
            expect(firstEntreeType).to.have.own.property('type');
            expect(firstEntreeType).to.have.own.property('isVegetarian');
            expect(res.body.map(entreeType => entreeType.type)).to.eql([
              "Beef",
              "Chicken",
              "Goat",
              "Jackfruit",
              "Plant-based",
              "Pork",
              "Soy",
            ]);
          });
        
        await EntreeType.create({
          type: 'EntreeType Test 1',
          isVegetarian: true
        });
        return await chai.request(server)
          .get('/entreeTypes')
          .then((res) => {
            expect(res).to.have.status(200);
            expect(res).to.be.json;
            expect(res.body).to.be.a('array');
            expect(res.body.length).to.eq(8);
            const firstEntreeType = res.body[0];
            expect(firstEntreeType).to.have.own.property('type');
            expect(firstEntreeType).to.have.own.property('isVegetarian');
            expect(res.body.map(entreeType => entreeType.type)).to.eql([
              "Beef",
              "Chicken",
              "Goat",
              "Jackfruit",
              "Plant-based",
              "Pork",
              "Soy",
              'EntreeType Test 1',
            ]);
          });
      });
    });

    context('if isVegetarian search filter is specified', () => {
      it('returns only vegetarian entreeTypes if isVegetarian search filter is true', async () => {
        await chai.request(server)
          .get('/entreeTypes?isVegetarian=true')
          .then((res) => {
            expect(res).to.have.status(200);
            expect(res).to.be.json;
            expect(res.body).to.be.a('array');
            expect(res.body.length).to.eq(4);
            const firstEntreeType = res.body[0];
            expect(firstEntreeType).to.have.own.property('type');
            expect(firstEntreeType).to.have.own.property('isVegetarian');
            expect(res.body.map(entreeType => entreeType.type)).to.eql([
              "Jackfruit",
              "Plant-based",
              "Soy",
              'EntreeType Test 1'
            ]);
          });

        await EntreeType.create({
          type: 'Vegetarian Entree Type',
          isVegetarian: true
        });
        return await chai.request(server)
          .get('/entreeTypes?isVegetarian=true')
          .then((res) => {
            expect(res).to.have.status(200);
            expect(res).to.be.json;
            expect(res.body).to.be.a('array');
            expect(res.body.length).to.eq(5);
            const firstEntreeType = res.body[0];
            expect(firstEntreeType).to.have.own.property('type');
            expect(firstEntreeType).to.have.own.property('isVegetarian');
            expect(res.body.map(entreeType => entreeType.type)).to.eql([
              "Jackfruit",
              "Plant-based",
              "Soy",
              'EntreeType Test 1',

              'Vegetarian Entree Type',
            ]);
          });
      });

      it('returns only meat entreeTypes if isVegetarian search filter is false', async () => {
        await chai.request(server)
          .get('/entreeTypes?isVegetarian=false')
          .then((res) => {
            expect(res).to.have.status(200);
            expect(res).to.be.json;
            expect(res.body).to.be.a('array');
            expect(res.body.length).to.eq(4);
            const firstEntreeType = res.body[0];
            expect(firstEntreeType).to.have.own.property('type');
            expect(firstEntreeType).to.have.own.property('isVegetarian');
            expect(res.body.map(entreeType => entreeType.type)).to.eql([
              "Beef",
              "Chicken",
              "Goat",
              "Pork",
            ]);
          });

        await EntreeType.create({
          type: 'Meat Entree Type',
          isVegetarian: false
        });
        return await chai.request(server)
          .get('/entreeTypes?isVegetarian=false')
          .then((res) => {
            expect(res).to.have.status(200);
            expect(res).to.be.json;
            expect(res.body).to.be.a('array');
            expect(res.body.length).to.eq(5);
            const firstEntreeType = res.body[0];
            expect(firstEntreeType).to.have.own.property('type');
            expect(firstEntreeType).to.have.own.property('isVegetarian');
            expect(res.body.map(entreeType => entreeType.type)).to.eql([
              "Beef",
              "Chicken",
              "Goat",
              "Pork",
              "Meat Entree Type",
            ]);
          });
      });

      it('returns a 400 error if isVegetarian search filter is not true or false', async () => {
        return await chai.request(server)
          .get('/entreeTypes?isVegetarian=hello')
          .then((res) => {
            expect(res).to.have.status(400);
            expect(res).to.be.json;
            expect(res.body).to.be.an('object');
            expect(res.body).to.eql({
              errors: [
                { message: 'isVegetarian should be either true or false' }
              ]
            });
          });
      });
    });
  });

  
});