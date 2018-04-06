
var express = require("express"),
    path = require("path"),
    app = express(),
    session = require('express-session'),
    bodyParser = require('body-parser'),
    port = 1234;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./static")));
app.use(session({secret: 'thisissecret'}));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    if (!req.session.count){
        req.session.count = 1;
    }
    else {
        req.session.count++;
    }
    res.render("index", {count: req.session.count});
})

app.get('/plus_two', function(req, res){
    req.session.count++;
    res.redirect("/");
})

app.get('/reset', function(req, res){
    req.session.destroy();
    res.redirect("/");
})

app.listen(port, function() {
 console.log(`listening on port ${port}`);
});
