# Sequelize Pagination and Search Filtering Assessment

**Note:** To read this in a rendered view, open your VS Code Command Palette
(using Control+Shift+P on Windows, Command+Shift+P on macOS) and choose
"Markdown: Open Preview" or "Markdown: Open Preview to Side".

In this assessment, you are asked to add Sequelize onto an existing Express
application. You will be asked to:

* Implement a search filter on an API endpoint to filter `EntreeTypes` by the
  `isVegetarian` attribute
* Debug an API endpoint that paginates `Ingredients` table entries

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

Run the migration and seed files. Take a look at the migration and model files
to familiarize yourself with the data of this application.

## Resetting Migration, Model, and Seed Files

Feel free to make edits to the migration, model, and seed files. All edits you
make to these files will be reset when you submit your project. So, make sure
the test specs still pass even after those files are reset.

You can reset your edits to the migration and model files by running the
following command:

```bash
npm run reset-files
```

## Instructions

Fix the following API endpoint implementations in the server defined in the
**app.js** file.

Run `npm test` to make sure you pass all the tests.

### GET /entreeTypes

The `GET /entreeTypes` endpoint should be able to accept a search filter
`isVegetarian` and return results that have a `isVegetarian` attribute matching
the search filter.

If the `isVegetarian` search filter is `true`, then only the `EntreeType`s with
a `isVegetarian` attribute value of `true` should be returned.

For example, after migrating and seeding the database, a request to
`GET /entreeTypes?isVegetarian=true` should something like this:

```json
[
  {
    "id": 4,
    "type": "Jackfruit",
    "isVegetarian": true,
    "createdAt": "2022-04-01T21:52:25.332Z",
    "updatedAt": "2022-04-01T21:52:25.332Z"
  },
  {
    "id": 5,
    "type": "Plant-based",
    "isVegetarian": true,
    "createdAt": "2022-04-01T21:52:25.332Z",
    "updatedAt": "2022-04-01T21:52:25.332Z"
  },
  {
    "id": 7,
    "type": "Soy",
    "isVegetarian": true,
    "createdAt": "2022-04-01T21:52:25.332Z",
    "updatedAt": "2022-04-01T21:52:25.332Z"
  }
]
```

If the `isVegetarian` search filter is `false`, then only the `EntreeType`s with
a `isVegetarian` attribute value of `false` should be returned.

If the `isVegetarian` search filter **IS NOT** specified, then **ALL**
`EntreeType`s should be returned.

If the `isVegetarian` search filter **IS** specified but **IS NOT** `true` or
`false`, then the response should return an error with a status code of 400.

For example, after migrating and seeding the database, a request to
`GET /entreeTypes?isVegetarian=hello` should return the following:

```json
{
  "errors": [
    { "message": "isVegetarian should be either true or false" }
  ]
}
```

Run the following command to test this endpoint:

```sh
npm test test/01-search-filter-spec
```

### GET /ingredients

The `GET /ingredients` endpoint should have a buggy implementation of
pagination. Fix this endpoint to match the following outputs.

After migrating and seeding the database, a request to
`GET /ingredients?page=3&size=2` should show the `2` ingredients after the first
`4` ingredients in the database and should return something like:

```json
{
  "ingredients": [
    {
      "id": 5,
      "name": "Steak",
      "measurement": "ounces",
      "createdAt": "2022-04-01T21:52:25.352Z",
      "updatedAt": "2022-04-01T21:52:25.352Z"
    },
    {
      "id": 6,
      "name": "Chicken Breast",
      "measurement": "pounds",
      "createdAt": "2022-04-01T21:52:25.352Z",
      "updatedAt": "2022-04-01T21:52:25.352Z"
    }
  ],
  "page": 3
}
```

If `page` **IS NOT** an integer and **IS NOT** greater than `0`, then the
`page` parameter should default to `1`.

If `size` **IS NOT** an integer and **IS NOT** greater than `0`, then the
`size` parameter should default to `4`.

For example, a request to `GET /ingredients` **OR**
`GET /ingredients?page=hello&size=world` should return something like:

```json
{
  "ingredients": [
    {
      "id": 1,
      "name": "Impossible Meat",
      "measurement": "ounces",
      "createdAt": "2022-04-01T21:52:25.352Z",
      "updatedAt": "2022-04-01T21:52:25.352Z"
    },
    {
      "id": 2,
      "name": "Chopped Lettuce",
      "measurement": "cups",
      "createdAt": "2022-04-01T21:52:25.352Z",
      "updatedAt": "2022-04-01T21:52:25.352Z"
    },
    {
      "id": 3,
      "name": "Tomatoes",
      "measurement": "whole tomatoes",
      "createdAt": "2022-04-01T21:52:25.352Z",
      "updatedAt": "2022-04-01T21:52:25.352Z"
    },
    {
      "id": 4,
      "name": "Cheese",
      "measurement": "slices",
      "createdAt": "2022-04-01T21:52:25.352Z",
      "updatedAt": "2022-04-01T21:52:25.352Z"
    }
  ],
  "page": 1
}
```

Run the following command to test this endpoint:

```sh
npm test test/02-pagination-spec
```

## Submission

1. Delete the **node_modules** directory from your project
2. Zip your project
3. Submit the zip folder
