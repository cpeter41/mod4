# Sequelize Ordering Assessment

Full-Time Week 11, Phase 3

**Note:** To read this in a rendered view, open your VS Code Command Palette
(using Control+Shift+P on Windows, Command+Shift+P on macOS) and choose
"Markdown: Open Preview" or "Markdown: Open Preview to Side".

In this assessment, you are asked to add Sequelize onto an existing Express
application. You will be asked to:

* Implement a `GET /entrees` endpoint that returns an ordered list of entrees
  by `price` then by `name`

Use the technologies you have used up to this point. They are all listed in
the **package.json** for your convenience.

* Express.js
* Sequelize
* Sequelize CLI
* SQLite3
* DotENV
* nodemon (for development purposes)

Do not add or remove any dependencies already listed in the **package.json**.

You **DO NOT** need to run `npx sequelize-cli init` to initialize Sequelize as
it is already done for you. The **.sequelizerc** file describes the Sequelize
configuration for this application.

## Getting started

Download the starter from the Download link at the bottom of this page.

Run `npm install` to install the dependencies listed in the last section.

Run `npm test` to run the all the test specs at any given time.

Create a **.env** file at root-level of your project and copy the contents of
the **.env.example** file into the newly created **.env** file.

## Instructions

1. Edit an API endpoint to show the results of the entrees ordered by
   the highest price at the top of the list and lowest price at the bottom. If
   two entrees have the same price then it should be sorted alphabetically.

Run `npm test` to make sure you pass all the tests.

### Database Schema

Run the migration files and the seed files. Take a
look at the migration and model files to familiarize yourself with the data of
this application.

This is the current state of the database schema after migrating the existing
migration files:

![db-schema]

### GET /entrees

Edit the `GET /entrees` endpoint to do the following.

The `GET /entrees` endpoint should have all its results ordered so that the
entrees with the highest prices will be at the top of the result list and the
lowest prices at the bottom. If there are two or more entrees with the same
price, then the those entrees should be sorted alphabetically.

After migrating and seeding the database, the endpoint should return the
something like this:

```json
[
  {
    "id": 5,
    "name": "Steak Frites",
    "description": "Tender steak with french fries on the side",
    "price": 21.5,
    "createdAt": "2022-04-01T21:52:25.346Z",
    "updatedAt": "2022-04-01T21:52:25.346Z"
  },
  {
    "id":6,
    "name":"Egg Salad",
    "description":"Mayonnaise with egg",
    "price":18.49,
    "createdAt":"2022-07-18T20:03:05.541Z",
    "updatedAt":"2022-07-18T20:03:05.541Z"
  },
  {
    "id": 1,
    "name": "John's Impossible Burger",
    "description": "Plant-based yumminess on a bun with brown-ale mustard",
    "price": 10.34,
    "createdAt": "2022-04-01T21:52:25.346Z",
    "updatedAt": "2022-04-01T21:52:25.346Z"
  },
  {
    "id": 4,
    "name": "Beef Skewers",
    "description": "Delicious tiny cuts of beef on a stick",
    "price": 8.99,
    "createdAt": "2022-07-18T20:35:47.980Z",
    "updatedAt": "2022-07-18T20:35:47.980Z"
  },
  {
    "id": 3,
    "name": "Chicken Noodle Soup",
    "description": "Warm and hearthy soup with chicken and egg noodles",
    "price": 8.99,
    "createdAt": "2022-07-18T20:03:05.513Z",
    "updatedAt": "2022-07-18T20:03:05.513Z"
  },
  {
    "id": 2,
    "name": "Caesar Salad",
    "description": "Lettuce salad with caesar dressing and tomatoes",
    "price": 7.89,
    "createdAt": "2022-07-18T20:03:05.508Z",
    "updatedAt": "2022-07-18T20:03:05.508Z"
  },
  {
    "id": 7,
    "name": "Milk Bread",
    "description": "Bread made with milk",
    "price": 2.28,
    "createdAt": "2022-07-18T20:03:05.562Z",
    "updatedAt": "2022-07-18T20:03:05.562Z"
  }
  ]
```

Request:

* Method: `GET`
* URL: `/entrees`
* Headers: none
* Body: none

Response:

* Status Code: `200`
* Headers:
  * Content-Type: application/json
  * Body: All the entries in the `Entrees` table ordered by the highest price
    first then by the name alphabetically.

Run `npm test` to make sure you pass all the tests.

## Submission

1. Delete the **node_modules** directory from your project
2. Zip your project
3. Submit the zip folder

[db-schema]: https://appacademy-open-assets.s3.us-west-1.amazonaws.com/Modular-Curriculum/content/week-11/assessments/entrees-db-schema-before.png
