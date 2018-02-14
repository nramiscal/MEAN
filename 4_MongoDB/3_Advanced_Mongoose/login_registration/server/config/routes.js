var users = require('../controllers/users.js');

module.exports = function(app){
    app.get('/', users.index);
    app.post('/register', users.register);
    app.get('/welcome', users.welcome);
    app.get('/logout', users.logout);
    app.post('/login', users.login);
}
