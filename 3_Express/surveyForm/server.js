
var express = require("express");
var app = express();
var path = require("path");
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render("index");
});

app.post('/result', (req, res) => {
  res.render("result", {data: req.body})
});

app.listen(8000, () => {
 console.log("listening on port 8000");
});
