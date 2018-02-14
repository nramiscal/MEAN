var mongoose = require('mongoose');
var Dog = mongoose.model("Dog");

function Dogs(){
  this.index = function(req, res){
    Dog.find({}, function(err, dogs){
      console.log(err);
      res.render('index', {dogs: dogs})
    });
  }
  this.add = function(req, res){
    res.render('new')
  }


  this.create = function(req, res){
    console.log(req.body);
    var dog = new Dog(req.body);
    dog.save(function(err){
      console.log(err);
      res.redirect('/')
    });
  }

  this.show = function(req, res){
    const id = req.params.id;
    console.log(id);
    Dog.find({_id: id}, function(err, dog){
      console.log(err);
      console.log(dog);
      res.render('show', {dog: dog})
    });
  }

  this.edit = function(req, res){
    const id = req.params.id;
    // console.log(id);
    Dog.find({_id: id}, function(err, dog){
      console.log(err);
      console.log(dog);
      res.render('edit', {dog: dog})
    });
  }

  this.update = function(req, res){
    const id = req.params.id;
    console.log(req.body);
    // update dog based on id
    Dog.update({_id: id}, req.body, function(err, dog){
        res.redirect('/')
    })
    // res.redirect('/')
  }

  this.remove = function(req, res){
    const id = req.params.id;
    Dog.remove({_id: id}, function(err, dog){
      res.redirect('/')
    })
  }


}

var dogs = new Dogs();
module.exports = dogs;
