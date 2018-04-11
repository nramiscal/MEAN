
var express = require("express"),
    path = require("path"),
    app = express(),
    session = require('express-session'),
    bodyParser = require('body-parser'),
    port = 8000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./static")));
app.use(session({secret: 'secret'}));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

// ROUTES
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

app.listen(port, function() {
    console.log(`listening on port ${port}`);
});
