var mongoose = require('mongoose');
var Message = mongoose.model('Message');
var Comment = mongoose.model('Comment');



function Messages(){
  this.index = function(req, res){
    Message.find({}, false, true).populate('comments').exec(function(err, messages){
      console.log(messages);
      console.log(err);
      res.render('index', {messages})
    });
  }

  this.add_message = function(req, res){
    console.log(req.body);
    var message = new Message(req.body);
    message.save(function(err){
      console.log(err);
      res.redirect('/')
    });
  }



}

var messages = new Messages();
module.exports = messages;
