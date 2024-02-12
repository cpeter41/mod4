const { expect } = require('chai');
const path = require('path');
const fs = require('fs');

const { createTables, insertData, stopTestOnError, queryRows } = require('./utils');

const queryFileName = '05-find-a-bouquet-by-flower-variety.sql';

describe('Query #3', () => {
  let client;
  let createError;
  let otherError;
  before(async () => {
    ({ client, createError, otherError } = await createTables());

    const insertError = await insertData(client, otherError);
    if (insertError) otherError = insertError;
  });

  after(async () => {
    if (client) {
      client.close();
    }
  });

  it('returns the bouquet name and price for the first bouquet that has flowers with a variety of \'Carnation\'', async () => {
    if (stopTestOnError(client, createError, otherError)) return;
    const queryPath = path.resolve(__dirname, '../sql-files', queryFileName);
    const query = fs.readFileSync(queryPath, 'utf-8');
    const rows = await queryRows(client, query);
    if (!rows) {
      expect.fail('No records returned from query');
    }
    const expectedData = [
      [ 'Get Well Soon', 59.99 ]
    ];
    expect(rows).to.eql(expectedData, `There was an error running the query:\n\n${query}\n\n`);
  });

  context('can be adapted to use with other flower varieties by replacing \'Carnation\' in the query\n      Important Note: The following test specs automatically pass\n      if you implemented the original query as intended', () => {
    it('returns the first bouquet that has flowers with a flower variety of \'Baby\'s Breath\'', async () => {
      const flowerType = '\'Baby\'\'s Breath\'';

      if (stopTestOnError(client, createError, otherError)) return;
      const queryPath = path.resolve(__dirname, '../sql-files', queryFileName);
      const originalQuery = fs.readFileSync(queryPath, 'utf-8');
      const query = originalQuery.replace(/'Carnation'/g, flowerType).replace(/"Carnation"/g, flowerType);
      const rows = await queryRows(client, query);
      if (!rows) {
        expect.fail('No records returned from query');
      }
      const expectedData = [
        [ 'Mother\'s Day', 39.99 ]
      ];
      expect(rows).to.eql(expectedData, `There was an error running the query:\n\n${query}\n\n`);
    });
  });
});
