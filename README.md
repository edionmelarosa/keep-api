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
* [GraphQl](https://graphql.org/)

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
* GraphQl Playground
`/graphql`

### TODO
* Authentication - When user wants to save/sync records
    * let user register with email and password
    * verify email

### Ideas
* Add feature to add a family member which is another user
* Settings - Settings e.g for graphs, reports