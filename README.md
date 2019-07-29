#  Burger MVC

This Bob's Burger's themed CRUD application allows the user to chose from the available burgers to "eat." After the burger the button to be eaten is clicked, the burger moves to the "Past Burgers" column.

## Custom ORM

A custom ORM is used in order to interact with the database. Functions are created in order to create/add, read, update, and delete from the database. It is through the `burgerControllers.js` file that these functions are used to add burgers to the databse, get all of the burger info to display, update the database when the burger has been eaten, and remove a burger.

## Handlebars

Content through routes. When the burger data is received from the database, handlebars then renders the `index.handlebars` to dynamically display the data.

## Technologies Used

* JavaScript
* JQuery
* Node.js
* Express
* MySQL Database
* Handlebars
* HTML5
* Bootstrap 4

### Created by Kelsi Hoyle

[Demo App on Heroku](https://vast-eyrie-52442.herokuapp.com/)