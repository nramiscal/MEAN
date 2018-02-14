
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

app.listen(8000, function() {
 console.log("listening on port 8000");
});

app.get('/', function(req, res) {
  res.render("index");
})

app.post('/process', function (req, res){
  req.session.name = req.body.name;
  req.session.location = req.body.location;
  req.session.language = req.body.language;
  req.session.comment = req.body.comment;
  res.redirect('/results');
});

app.get('/results', function(req, res){

  res.render("results", {data: req.session})
})
