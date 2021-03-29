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
* Available routes
    * Categories
        * GET `/categories`: Get all categories
        * GET `/categories/id: Get a category
        * POST `/categories/: Create a category
        * PATCH `/categories/id: Update a category
        * DELETE `/categories/id`: Delete a category

### TODO
* Crud expenses
 - category, name, description, amount
* Crud income
 - name, description, amount
* Reports
  - Daily, weekly, monthly, yearly
