
var express = require("express");
var path = require("path");
var app = express();
var session = require('express-session');
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "./static")));


app.use(session({secret: 'codingdojorocks'}));  // string for encryption

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
// root route to render the index.ejs view

app.get('/', function(req, res) {
  if (req.session.count){
    req.session.count ++;
  }
  else{
    req.session.count = 1;
  }
 res.render("index", {session: req.session});
})

app.get('/plus_two', function(req, res){
  if (req.session.count){
    req.session.count += 2;
  }
  else{
    req.session.count = 1;
  }
  res.render("index", {session: req.session});
})

app.get('/reset', function(req, res){
  req.session.count = 1;
  res.render("index", {session: req.session});
})


// tell the express app to listen on port 8000
app.listen(8000, function() {
 console.log("listening on port 8000");
});

app.post('/users', function (req, res){
    // set the name property of session.
    req.session.name = req.body.name;
    console.log(req.session.name);
    //code to add user to db goes here!
    // redirect the user back to the root route.
    res.redirect('/');
});
