const { expect } = require('chai');
const path = require('path');
const fs = require('fs');

const { createTables, insertData, stopTestOnError, queryRows } = require('./utils');

const queryFileName = '03-find-bouquets-by-price.sql';

describe('Query #1', () => {
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

  it('returns bouquet name and price for bouquets that have prices between $30.45 and $40.36, ordered by bouquet name', async () => {
    if (stopTestOnError(client, createError, otherError)) return;
    const queryPath = path.resolve(__dirname, '../sql-files', queryFileName);
    const query = fs.readFileSync(queryPath, 'utf-8');
    const rows = await queryRows(client, query);
    if (!rows) {
      expect.fail('No records returned from query');
    }
    expect(rows).to.eql([
      ["Mother's Day", 39.99]
    ], `There was an error running the query:\n\n${query}\n\n`);
  });

  context('can be adapted to use with other prices by replacing 30.45 and 40.36 in the query\n      Important Note: The following test specs automatically pass\n      if you implemented the original query as intended', () => {
    it('returns bouquets that have prices between $50 and $60', async () => {
      const price1 = 50;      
      const price2 = 60;      

      if (stopTestOnError(client, createError, otherError)) return;
      const queryPath = path.resolve(__dirname, '../sql-files', queryFileName);
      const originalQuery = fs.readFileSync(queryPath, 'utf-8');
      const query = originalQuery.replace(/30.45/g, price1).replace(/40.36/g, price2);
      const rows = await queryRows(client, query);
      if (!rows) {
        expect.fail('No records returned from query');
      }
      const data = rows.map(row => Object.values(row));
      expect(data).to.eql([
        ['Get Well Soon', 59.99]
      ], `There was an error running the query:\n\n${query}\n\n`);
    });
  });
});
