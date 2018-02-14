// GET '/' Displays all of the mongooses.
// GET '/mongooses/:id' Displays information about one mongoose.
// GET '/mongooses/new' Displays a form for making a new mongoose.
// POST '/mongooses' Should be the action attribute for the form in the above route (GET '/mongooses/new').
// GET '/mongooses/edit/:id' Should show a form to edit an existing mongoose.
// POST '/mongooses/:id' Should be the action attribute for the form in the above route (GET '/mongooses/edit/:id').
// POST '/mongooses/destroy/:id' Should delete the mongoose from the database by ID.

var dogs = require('../controllers/dogs');

module.exports = function(app){
  app.get('/', dogs.index);
  app.get('/dogs/add', dogs.add)
  app.post('/dogs/create', dogs.create)
  app.get('/dogs/show/:id', dogs.show)
  app.get('/dogs/edit/:id', dogs.edit)
  app.post('/dogs/update/:id', dogs.update)
  app.get('/dogs/remove/:id', dogs.remove)
}
