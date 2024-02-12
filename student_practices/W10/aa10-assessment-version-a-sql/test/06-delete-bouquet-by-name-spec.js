const { expect } = require('chai');
const path = require('path');
const fs = require('fs');

const { createTables, insertData, stopTestOnError, queryRows, run } = require('./utils');

const findAllBouquets = '06-find-all-bouquets.sql';
const findAllFlowers = '06-find-all-flowers.sql';
const deleteBouquet = '06-delete-bouquet-by-name.sql';

describe('Delete data', () => {
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

  describe('Find all bouquets', () => {
    it('returns the names of all the bouquets, ordered by bouquet name', async () => {
      if (stopTestOnError(client, createError, otherError)) return;
      const queryPath = path.resolve(__dirname, '../sql-files', findAllBouquets);
      const query = fs.readFileSync(queryPath, 'utf-8');
      const rows = await queryRows(client, query);
      if (!rows) {
        expect.fail('No records returned from query');
      }
      const expectedData = [
        [ 'Get Well Soon' ],
        [ 'Mother\'s Day' ],
      ];
      expect(rows).to.eql(expectedData, `There was an error running the query:\n\n${query}\n\n`);
    });
  });

  describe('Find all flowers', () => {
    it('returns the flower variety, color, and stem length of all the flowers, ordered by variety, color, then stem length', async () => {
      if (stopTestOnError(client, createError, otherError)) return;
      const queryPath = path.resolve(__dirname, '../sql-files', findAllFlowers);
      const query = fs.readFileSync(queryPath, 'utf-8');
      const rows = await queryRows(client, query);
      if (!rows) {
        expect.fail('No records returned from query');
      }
      const expectedData = [
        [ "Baby's Breath", null, 'long' ],
        [ 'Carnation', 'pink', 'long' ],
        [ 'Carnation', 'purple', 'long' ],
        [ 'Carnation', 'white', 'short' ],
        [ 'Carnation', 'yellow', 'short' ],
        [ 'Daisy', 'yellow', 'short' ],
        [ 'Lily', 'white', 'short' ],
        [ 'Solidago', 'yellow', 'medium' ]
      ];
      expect(rows).to.eql(expectedData, `There was an error running the query:\n\n${query}\n\n`);
    });
  });

  describe('Deletes the bouquet with the name \'Get Well Soon\'', () => {
    before(async () => {
      const deletePath = path.resolve(__dirname, '../sql-files', deleteBouquet);
      const deleteSql = fs.readFileSync(deletePath, 'utf-8');
      try {
        await run(client, deleteSql);
      } catch(e) {
        console.log('Error when running delete file');
        console.log(e);
        otherError = e.message;
      }
    });

    context('after delete is executed:', () => {
      it('when finding all bouquets, there is no bouquet with the name \'Get Well Soon\'', async () => {
        if (stopTestOnError(client, createError, otherError)) return;
        const queryPath = path.resolve(__dirname, '../sql-files', findAllBouquets);
        const query = fs.readFileSync(queryPath, 'utf-8');
        const rows = await queryRows(client, query);
        if (!rows) {
          expect.fail('No records returned from query');
        }
        const expectedData = [
          [ 'Mother\'s Day' ],
        ];
        expect(rows).to.eql(expectedData, `There was an error running the query:\n\n${query}\n\n`);
      });

      it('when finding all flowers, all flowers for the \'Get Well Soon\' bouquet are deleted', async () => {
        if (stopTestOnError(client, createError, otherError)) return;
        const queryPath = path.resolve(__dirname, '../sql-files', findAllFlowers);
        const query = fs.readFileSync(queryPath, 'utf-8');
        const rows = await queryRows(client, query);
        if (!rows) {
          expect.fail('No records returned from query');
        }
        const expectedData = [
          [ "Baby's Breath", null, 'long' ],
          [ 'Carnation', 'pink', 'long' ],
          [ 'Carnation', 'purple', 'long' ]
        ];
        expect(rows).to.eql(expectedData, `There was an error running the query:\n\n${query}\n\n`);
      });
    })
  });

  describe('Deletes the bouquet with the name \'Mother\'s Day\'\n    (original delete statement adapted to use with other bouquet\n    names by replacing \'Get Well Soon\' in the delete file)\n    Important Note: The following test specs automatically pass\n    if you implemented the original delete statement as intended.', () => {
    before(async () => {
      client.close();
      ({ client, createError, otherError } = await createTables());

      const insertError = await insertData(client, otherError);
      if (insertError) otherError = insertError;

      const deletePath = path.resolve(__dirname, '../sql-files', deleteBouquet);
      const originalDelete = fs.readFileSync(deletePath, 'utf-8');
      const bouquet = '\'Mother\'\'s Day\'';
      const deleteSql = originalDelete.replace(/'Get Well Soon'/g, bouquet).replace(/"Get Well Soon"/g, bouquet);
      try {
        await run(client, deleteSql);
      } catch(e) {
        console.log(e)
        otherError = e.message;
      }
    });

    context('after delete is executed:', () => {
      it('when finding all bouquets, there is no bouquet with the name \'Mother\'s Day\'', async () => {
        if (stopTestOnError(client, createError, otherError)) return;
        const queryPath = path.resolve(__dirname, '../sql-files', findAllBouquets);
        const query = fs.readFileSync(queryPath, 'utf-8');
        const rows = await queryRows(client, query);
        if (!rows) {
          expect.fail('No records returned from query');
        }
        const expectedData = [
          [ 'Get Well Soon' ]
        ];
        expect(rows).to.eql(expectedData, `There was an error running the query:\n\n${query}\n\n`);
      });

      it('when finding all flowers, all flowers for the \'Get Well Soon\' bouquet are deleted', async () => {
        if (stopTestOnError(client, createError, otherError)) return;
        const queryPath = path.resolve(__dirname, '../sql-files', findAllFlowers);
        const query = fs.readFileSync(queryPath, 'utf-8');
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
    })
  });
});
