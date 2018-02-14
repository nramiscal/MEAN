var quotes = require('../controllers/quotes.js');

module.exports = function(app){
  // app.get('/', function(req, res){
  // students.index(req, res);
  // });
  app.get('/', quotes.index);
  app.post('/quotes', quotes.create);
  app.get('/quotes', quotes.view);
}
