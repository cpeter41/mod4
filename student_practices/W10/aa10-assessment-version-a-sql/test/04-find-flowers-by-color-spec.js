const { expect } = require('chai');
const path = require('path');
const fs = require('fs');

const { createTables, insertData, stopTestOnError, queryRows } = require('./utils');

const queryFileName = '04-find-flowers-by-color.sql';

describe('Query #2', () => {
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

  it('returns flower variety, color, and stem length for flowers that have a color of \'pink\' or \'purple\', ordered by variety, color, and stem length', async () => {
    if (stopTestOnError(client, createError, otherError)) return;
    const queryPath = path.resolve(__dirname, '../sql-files', queryFileName);
    const query = fs.readFileSync(queryPath, 'utf-8');
    const rows = await queryRows(client, query);
    if (!rows) {
      expect.fail('No records returned from query');
    }
    const expectedData = [
      [ 'Carnation', 'pink', 'long' ],
      [ 'Carnation', 'purple', 'long' ]
    ];
    expect(rows).to.eql(expectedData, `There was an error running the query:\n\n${query}\n\n`);
  });

  context('can be adapted to use with other colors by replacing \'pink\' and \'purple\' in the query\n      Important Note: The following test specs automatically pass\n      if you implemented the original query as intended', () => {
    it('returns flowers has a color of \'white\' or \'yellow\' ordered by color', async () => {
      const color1 = '\'white\'';
      const color2 = '\'yellow\'';

      if (stopTestOnError(client, createError, otherError)) return;
      const queryPath = path.resolve(__dirname, '../sql-files', queryFileName);
      const originalQuery = fs.readFileSync(queryPath, 'utf-8');
      const query = originalQuery.replace(/'pink'/g, color1).replace(/'purple'/g, color2).replace(/"pink"/g, color1).replace(/"purple"/g, color2);
      const rows = await queryRows(client, query);
      if (!rows) {
        expect.fail('No records returned from query');
      }
      const expectedData = [
        [ 'Carnation', 'white', 'short' ],
        [ 'Carnation', 'yellow', 'short' ],
        [ 'Daisy', 'yellow', 'short' ],
        [ 'Lily', 'white', 'short' ],
        [ 'Solidago', 'yellow', 'medium' ]
      ];
      expect(rows).to.eql(expectedData, `There was an error running the query:\n\n${query}\n\n`);
    });
  });
});
