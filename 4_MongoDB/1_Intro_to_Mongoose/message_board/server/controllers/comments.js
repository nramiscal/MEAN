var mongoose = require('mongoose');
const Comment = require('mongoose').model('Comment');
const comments = require('../controllers/comments');
var Message = mongoose.model('Message');

function Comments(){
  this.add_comment = function(req, res){
    const id = req.params.id;
    let body = req.body;
    body._message = id;

    let comment = new Comment(body);

    Message.update({_id: id}, {$push: {comments: comment}}, function(err, message){
      if(err){
        console.error(err)
        return res.redirect(`/`)
      }

      comment.save(function(err){
        if(err){
          console.error(err);
        }
        res.redirect(`/`)
      })
    })
  }
}

module.exports = new Comments()
