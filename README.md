## Keep API
An API for expense tracking application.

### Features
* Crud categories
* Crud expenses
* Crud income
* Reports

## Technology
* [NestJs](https://nestjs.com/)
* [TypeOrm](https://typeorm.io/#/entities)

## Installation
* Install packages
    `yarn` - `yarn install`
    `npm` - `npm install`

* Configurations
    See `.env.sample`

* Running the app
    Before starting, make sure you're database server have been started.
    `yarn` - `yarn run start:dev`
    `npm` - `npm run start:dev`


## Available routes
* Categories
    * GET `/categories`: Get all categories
        * filters: name
    * GET `/categories/id`: Get a category
    * POST `/categories/`: Create a category
    * PATCH `/categories/id`: Update a category
    * DELETE `/categories/id`: Delete a category

* Expenses
    * GET `/expenses`: Get all expenses
        * filters: name and category
    * GET `/expenses/id`: Get a expense
    * POST `/expenses/`: Create a expense
    * PATCH `/expenses/id`: Update a expense
    * DELETE `/expenses/id`: Delete a expense

### TODO
* Crud income
 - name, description, amount
* Reports
  - Daily, weekly, monthly, yearly
