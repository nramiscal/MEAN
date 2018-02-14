var mongoose = require('mongoose');
var Quote = mongoose.model("Quote");

function Quotes(){
  this.index = function(req, res){
    // Quote.find({}, function(err, quotes){
    //   console.log(err);
      res.render('index');
    }

  // }
  this.create = function(req, res){
    var quote = new Quote(req.body);
    quote.save(function(err){
      console.log(err);
      res.redirect('quotes');
    });
  }

  this.view = function(req, res){
    Quote.find({}, function(err, quotes){
      console.log(err);
      res.render('quotes', {quotes: quotes});
    })
  }
}

var quotes = new Quotes();
module.exports = quotes;
