var messages = require('../controllers/messages');
var comments = require('../controllers/comments');


module.exports = function(app){
  // app.get('/', dogs.index);
  // app.get('/dogs/add', dogs.add)
  // app.post('/dogs/create', dogs.create)
  // app.get('/dogs/show/:id', dogs.show)
  // app.get('/dogs/edit/:id', dogs.edit)
  // app.post('/dogs/update/:id', dogs.update)
  // app.get('/dogs/remove/:id', dogs.remove)


  app.get('/', messages.index);
  app.post('/add_message', messages.add_message);


  // comment routes
  app.post('/add_comment/:id', comments.add_comment)


}
