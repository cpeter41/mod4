const chai = require('chai');
const chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
const expect = chai.expect;

const { resetDB, seedAllDB } = require('./utils/test-utils');
const { Car } = require('../db/models');
const { validCars } = require('../db/seeders/20220330155025-valid-car-seeds');

describe('Phase 2 Specs - Cars', () => {
  beforeEach(function () {
    return resetDB();
  });

  it('commits all seeder files successfully', async () => {
    await expect(seedAllDB()).to.not.eventually.be.rejectedWith(Error);
    await resetDB();
    expect(validCars.length).to.be.gte(3);
    await expect(Car.bulkCreate(validCars, {
      validate: true,
    })).to.not.eventually.be.rejectedWith(Error);
  });

  it('has at least 3 entries in the Cars table after committing all seeder files', async () => {
    await seedAllDB()
    const numCars = await Car.count({});
    expect(numCars).to.be.least(3);
  });
})