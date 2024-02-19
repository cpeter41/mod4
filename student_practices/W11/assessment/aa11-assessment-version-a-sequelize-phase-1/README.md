# Sequelize-1 Assessment

Full-Time Week 11, Phase 1

**Note:** To read this in a rendered view, open your VS Code Command Palette
(using Control+Shift+P on Windows, Command+Shift+P on macOS) and choose
"Markdown: Open Preview" or "Markdown: Open Preview to Side".

In this assessment, you are asked to add Sequelize onto an existing Express
application. You will be asked to:

* Create a Sequelize migration that allows you to create a `Packages` table
* Implement the appropriate database-level constraints to the `Packages` table
* Create a Sequelize model that allows you to create a `Package` model
* Implement the appropriate model-level validations to the `Package` model

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
Make sure there are **no spaces in your folder's local path**. For example, if
the starter project is in a directory path that looks like this,
`/Users/dave/Desktop/App Academy/assessment-for-sprint-11 2`, the dependencies
will not install properly. Make sure your starter's directory path looks
something like this instead,
`/Users/dave/Desktop/App-Academy/assessment-for-sprint-11-2`. You can see
what the directory path is by running the command `pwd`.

Run `npm test` to run the all the test specs at any given time.

Create a **.env** file at root-level of your project and copy the contents of
the **.env.example** file into the newly created **.env** file.

## Instructions

Your employer wants you to create a feature for your postal office for tracking
packages. A package should have the following attributes:

* `trackingNumber`
* `weightKg` (weight in kilograms)
* `sender` (name of the sender)
* `recipient` (full name of the recipient)
* `isDelivered` (flag indicating successful delivery)

Your job is to create a database schema as well as a Sequelize model for this
feature.

### Valid/Invalid Data

Here is some **important** information you should know about how the data in the
schema should be represented:

* **no two packages** should have the same `trackingNumber`
* the table name should be `Packages`
* the model name should be `Package`

Take a look at the **test/data/package-values.js** file.

This file holds examples for both valid and invalid example values for all the
attributes.

### Create a Migration and a Model

Based on the example attribute values for every column in the
**test/data/package-values.js** file, you should be able to determine the
database-level constraints and model-level validations necessary to represent
this data well.

You should create:

* a migration file with the proper database-level constraints
* a model file with the proper model-level validations

To check your constraints and validations, run the tests:

```bash
npm test
```

To run each test file individually:

```bash
npm test test/00-trackingNumber-spec.js
npm test test/01-weightKg-spec.js
npm test test/02-sender-spec.js
npm test test/03-recipient-spec.js
npm test test/04-isDelivered-spec.js
npm test test/05-createdAt-spec.js
npm test test/06-updatedAt-spec.js
```

To remove the extra logging in the terminal when you run the test specs, in the
`config/database.js` file, comment in the line `logging: false`.

In addition to the test specs, seeder files are included to help you debug: 
You should be able to seed the database with the
**20220324203414-valid-packages.js** seed file, **BUT** you should **NOT** be
able to seed the database with any of the seeds in the
**20220325213652-invalid-packages.js** seed file.

> Note: you will be tested on the outcome of the test results, not whether or
> the seed files run as expected.

## Submission

1. Delete the **node_modules** directory from your project
2. Zip your project
3. Submit the zip folder
