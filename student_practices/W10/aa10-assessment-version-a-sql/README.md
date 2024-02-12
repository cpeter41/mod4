# Assessment Project: SQL

This assessment project is testing your ability to make good database design
choices for a given scenario and events. It also tests your ability to formulate
SQL query or delete statement when given an event in the scenario.

In this assessment, you will:

* Formulate a SQL database schema based on a given scenario and events
* Create SQL tables based on your database schema
* Insert data into the created tables based on the scenario
* Structure SQL queries based on the given events
* Structure a SQL delete operation based on the given events

There are mocha tests that determine if the SQL statements to create tables and
insert data don't cause an error. Then, it runs the files that contain the SQL
queries and delete statement and compare their outputs to what the expected
outputs.

Run the mocha tests with `npm test`.

## Get started

* Download the assessment starter below
* Run `npm install`
* Run all the tests with `npm test`

Make sure there are **no spaces in your folder's local path**. For example, if
the starter project is in a directory path that looks like this,
`/Users/dave/Desktop/App Academy/assessment-for-sprint-11 2`, the dependencies
will not install properly. Make sure your starter's directory path looks
something like this instead,
`/Users/dave/Desktop/App-Academy/assessment-for-sprint-11-2`. You can see
what the directory path is by running the command `pwd`.

## Scenario

You want to create a database to record the bouquets created in your flower
shop. A bouquet has a name, a price, and consists of one or more flowers. Each
flower has a color, a qualitative stem length (ie. 'medium'), and an association
to a variety of flower (ie. 'Rose').

The flower shop currently has two bouquets in stock with the following flowers:

* First bouquet is named 'Get Well Soon' with a price of $59.99 and the
  following flowers (color, stem length, variety):
  * 'yellow', 'short',  'Carnation'
  * 'white',  'short',  'Carnation'
  * 'white',  'short',  'Lily'
  * 'yellow', 'medium', 'Solidago'
  * 'yellow', 'short',  'Daisy'
* Second bouquet is named 'Mother''s Day' with a price of $39.99 and the
  following flowers (color, stem length, variety):
  * 'pink',             'long', 'Carnation'
  * 'purple',           'long', 'Carnation'
  * no color specified, 'long', 'Baby''s Breath'

### Events

1. A customer requests a feature in your flower shop's website to find the names
   and prices of all the bouquets in a price range between a minimum price of
   $30.45 and a maximum price of $40.36. Order the bouquets alphabetically by
   their name.
2. You are taking inventory of all your flowers and want to know the flowers
   that are 'pink' or 'purple'. For each flower found, you want to know the
   variety, color, and stem length of the flower. Order the flowers by their
   variety, color, then stem length.
3. A customer really likes a certain variety of flower, 'Carnation', and wants
   to know what the name and price is of the first bouquet alphabetically that
   has at least one 'Carnation' flower.
4. The bouquet with the name of 'Get Well Soon' is not selling well, so you
   decide to remove it from your inventory. You want to remove the information
   about the 'Get Well Soon' bouquet and all its associated flowers.

## Step 1: Design the Database Schema

Formulate a database schema to best represent the given scenario and events.

**Important Note**: You can structure and organize your database schema in any
way that you want. You can have any number of tables and columns, and table and
column names do not matter. However, there are certain schema configurations
that are more optimal for solving the problems in each event in the given
scenario.

Create the tables in the __sql-files/01-create-tables.js__. This file will be
run before every spec for the rest of this project. You can have **multiple**
SQL statements in this file.

Run the test specs in __test/01-create-tables-spec.js__ file by running:

```shell
npm test test/01-create-tables-spec.js
```

**Note**: This will not test whether or not you created and optimal database
schema. Passing these specs will only indicate whether or not there are errors
when running the __sql-files/01-create-tables.js__ file.

## Step 2: Insert the Data

Insert the data for the given scenario and events in the
__sql-files/02-insert-data.js__. This file will be run before every spec for the
rest of this project. You can have **multiple** SQL statements in this file.

Run the test specs in __test/02-insert-data-spec.js__ file by running:

```shell
npm test test/02-insert-data-spec.js
```

**Note**: This will not test whether or not you inserted the data correctly.
Passing these specs will only indicate whether or not there are errors
when running the __sql-files/02-insert-data.js__ file.

## Step 3: Find the bouquets in a price range

Structure a SQL query for the **first event** in the
__sql-files/03-find-bouquets-by-price.js__. You can have **only one** SQL
statement in this file.

First event (repeat):

A customer requests a feature in your flower shop's website to find the names
and prices of all the bouquets in a price range between a minimum price of
$30.45 and a maximum price of $40.36. Order the bouquets alphabetically by
their name.

The test specs in the __test/03-find-bouquets-by-price-spec.js__ file will
create the tables and insert the data from the first 2 steps. Then it will run
the SQL query.

The first test spec expects the SQL query to output the following bouquet names
for all bouquets in the price range of $30.45 to $40.36:

|              |       |
| ------------ | ----- |
| Mother's Day | 39.99 |

The second test spec will replace the `30.45` and `40.36` in the file to adapt
the SQL query that you wrote to be adapted to any price range. It will replace
the original prices with `50` and `60` respectively. The second test spec
expects the following bouquet names for all bouquets in the price range of $50
to $60:

|               |       |
| ------------- | ----- |
| Get Well Soon | 59.99 |

Use this to run the test specs for this query:

```shell
npm test test/03-find-bouquets-by-price-spec.js
```

**TIP**: Check your database schema, create table statements, and insertion
statements if you get stuck. There may be an error in your database design or
any one of those files that could be causing errors in this step.

## Step 4: Find flowers by color

Structure a SQL query for the **second event** in the
__sql-files/04-find-flowers-by-color.js__. You can have **only one** SQL
statement in this file.

Second event (repeat):

You are taking inventory of all your flowers and want to know the flowers
that are 'pink' or 'purple'. For each flower found, you want to know the
variety, color, and stem length of the flower. Order the flowers by their
variety, color, then stem length.

The test specs in the __test/04-find-flowers-by-color-spec.js__ file will
create the tables and insert the data from the first 2 steps. Then it will run
the SQL query.

The first test spec expects the SQL query to output the following flowers'
variety, color, and stem length for flowers that have a color of 'pink' or
'purple':

|           |        |      |
| --------- | ------ | ---- |
| Carnation | pink   | long |
| Carnation | purple | long |

The second test spec will replace the 'pink' and 'purple' in the file to adapt
the SQL query that you wrote to be adapted to use any two colors. It will
replace the original colors with 'white' and 'yellow' respectively. The second
test spec expects the flowers' variety, color, and stem length for flowers that
have a color of 'white' or 'yellow':

|           |        |        |
| --------- | ------ | ------ |
| Carnation | white  | short  |
| Carnation | yellow | short  |
| Daisy     | yellow | short  |
| Lily      | white  | short  |
| Solidago  | yellow | medium |

Use this to run the test specs for this query:

```shell
npm test test/04-find-flowers-by-color-spec.js
```

**TIP**: Check your database schema, create table statements, and insertion
statements if you get stuck. There may be an error in your database design or
any one of those files that could be causing errors in this step.

## Step 5: Find a bouquet by flower variety

Structure a SQL query for the **third event** in the
__sql-files/05-find-a-bouquet-by-flower-variety.js__. You can have **only one** 
SQL statement in this file.

Third event (repeat):

A customer really likes a certain variety of flower, 'Carnation', and wants
to know the name and price of the first bouquet alphabetically that has at least
one 'Carnation' flower.

The test specs in the __test/05-find-a-bouquet-by-flower-variety-spec.js__ file
will create the tables and insert the data from the first 2 steps. Then it will
run the SQL query.

The first test spec expects the SQL query to output the following bouquet's name
and price for the first bouquet that contains at least one flower with a variety
of 'Carnation':

|               |       |
| ------------- | ----- |
| Get Well Soon | 59.99 |

The second test spec will replace the 'Carnation' in the file to adapt the SQL
query that you wrote to be adapted to any flower variety. It will replace
the original flower variety with 'Baby''s Breath'. The second test spec expects
the following name and price for the first bouquet that contains at least one
flower with a variety of 'Baby''s Breath':

|              |       |
| ------------ | ----- |
| Mother's Day | 39.99 |

Use this to run the test specs for this query:

```shell
npm test test/05-find-a-bouquet-by-flower-variety-spec.js
```

**TIP**: Check your database schema, create table statements, and insertion
statements if you get stuck. There may be an error in your database design or
any one of those files that could be causing errors in this step.

## Step 6: Delete a bouquet by its name

Structure a SQL delete statement for the **fourth event** in the
__sql-files/06-delete-bouquet-by-name.js__. You can have **only one** SQL
statement in this file.

Fourth event (repeat):

The bouquet with the name of 'Get Well Soon' is not selling well, so you
decide to remove it from your inventory. You want to remove the information
about the 'Get Well Soon' bouquet and all its associated flowers.

To test this delete statement, the test specs need to know what the state of
certain data is before and after the deletion. Structure two SQL queries to
provide the test specs with this data.

The first SQL query should be structured in the
__sql-files/06-find-all-bouquets.js__. to output the names of all the bouquets.
Order the bouquets alphabetically by their name.

The second SQL query should be structured in the
__sql-files/06-find-all-flowers.js__. to output the variety, color, and stem
length of all the flowers. Order the flowers by their variety, color, then stem
length.

The test specs in the __test/06-delete-bouquet-by-name-spec.js__ file
will create the tables and insert the data from the first 2 steps. Then it will
run the SQL queries **before** running the delete statement and compare the
output with what is expected. It will then run the delete statement and will
check for any errors when running it. Finally, it will run the two SQL queries
again **after** running the delete statement to compare the output with what is
expected.

The first test spec expects the first SQL query, finding the names of all the
bouquets, to output the following:

|               |
| ------------- |
| Get Well Soon |
| Mother's Day  |

The second test spec expects the second SQL query, finding the variety, color,
and stem length of all the flowers, to output the following:

|               |        |        |
| ------------- | ------ | ------ |
| Baby's Breath | NULL   | long   |
| Carnation     | pink   | long   |
| Carnation     | purple | long   |
| Carnation     | white  | short  |
| Carnation     | yellow | short  |
| Daisy         | yellow | short  |
| Lily          | white  | short  |
| Solidago      | yellow | medium |

After the second test spec and before the third test spec, the delete statement
will be executed.

The third test spec expects the first SQL query, finding the names of all the
bouquets, to output the following:

|              |
| ------------ |
| Mother's Day |

The fourth test spec expects the second SQL query, finding the variety, color,
and stem length of all the flowers, to output the following:

|               |        |      |
| ------------- | ------ | ---- |
| Baby's Breath | NULL   | long |
| Carnation     | pink   | long |
| Carnation     | purple | long |

The remaining test specs will replace the 'Get Well Soon' in the file to adapt
the SQL delete statement that you wrote to be adapted to any bouquet name. It
will replace the original bouquet name with 'Mother''s Day'. The test specs will
test the output of the SQL queries **after** the adapted delete statement is
run.

The fifth test spec expects the first SQL query, finding the names of all the
bouquets, to output the following:

|               |
| ------------- |
| Get Well Soon |

The sixth test spec expects the second SQL query, finding the variety, color,
and stem length of all the flowers, to output the following:

|           |        |        |
| --------- | ------ | ------ |
| Carnation | white  | short  |
| Carnation | yellow | short  |
| Daisy     | yellow | short  |
| Lily      | white  | short  |
| Solidago  | yellow | medium |

Use this to run the test specs for the delete statement and associated queries:

```shell
npm test test/06-delete-bouquet-by-name-spec.js
```

**TIP**: Check your database schema, create table statements, and insertion
statements if you get stuck. There may be an error in your database design or
any one of those files that could be causing errors in this step.

## Submission

When you are ready to submit:

1. Re-run all unit tests and fix any syntax errors that are crashing the tests. If
the unit tests crash, or do not run, you will receive a zero for the coding
portion of the assessment
2. Delete the `node_modules` directory
3. Delete any database files that you created using `sqlite3`
4. Rename your folder to begin with your `firstName_lastName`
5. Zip up your folder
6. Upload it
