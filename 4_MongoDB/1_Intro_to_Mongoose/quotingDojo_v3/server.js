var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    path = require('path'),
    port = 1234,
    moment = require("moment");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

mongoose.connect('mongodb://localhost/test_app');

mongoose.model('Quote',new mongoose.Schema({
		author:{type:String,required:true,minlength:1,maxlength:255},
		quote:{type:String,required:true,minlength:1,maxlength:255}
	}, { timestamps: true })); // adds createdAt and updatedAt

let QuoteController = require("./QuoteController.js");
let Quote = mongoose.model("Quote");


// ROUTES

app.get('/', (req, res) => {
    res.render('index');
})

app.get('/quotes', (req,res) => {
    QuoteController.all(req,res);
})

app.post('/quotes', (req,res)=>{
    QuoteController.create(req,res);
});


// set our server to listen on specified port
app.listen(port, () => {
    console.log(`listening on port ${port}`);
})
