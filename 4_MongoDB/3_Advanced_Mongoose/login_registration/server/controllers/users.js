var mongoose = require("mongoose");
var bcrypt = require('bcrypt');
var User = mongoose.model('User');

function Users(){
    this.index = function(req, res){
        req.session.destroy();
        res.render('index');
    }

    this.login = function(req, res){
        let errors = [];
        console.log(req.body);
        if(req.body.email == ''){errors.push("Please enter email address.");}
        if(req.body.pass == ''){errors.push("Please enter password.");}
        if(errors.length > 0){res.render("index",{login_errors:errors});}


        // this part is not working:
        // throw er; // Unhandled 'error' event
        // TypeError: User.schema.methods.match is not a function
        User.find({email:req.body.email},function(err,user){
            if(user.length > 0){
                user = user[0];

                if(!User.schema.methods.match(req.body.password,user.password)){
                    res.render("index",{login_errors:["Invalid Credentials."]});
                }
                else{
                    req.session.name = user.first_name;
                    res.redirect("/welcome");
                };
            }
            else{
                res.render("index",{login_errors:["Email Not Found."]});
            }
        });
    }

    this.register = function(req, res){
        console.log(req.body);
        User.find({email:req.body.email},function(err,users){
            if(users.length > 0){
                res.render("index",{regErrs:["A user with this email already exists."]});
            }
            else{
                let user = new User(req.body);
                user.save(function(errs){
                    if(errs){
                        res.render("index",{reg_errors:user.errors})
                    }
                    else{
                        req.session.name = user.first_name;
                        res.redirect("/welcome");
                    }
                });
            }
        })
    }

    this.welcome = function(req, res){
        if(!req.session.name){
            res.redirect("/");
        }
        else{
            res.render('welcome', {name: req.session.name});
        }
    }

    this.logout = function(req, res){
        req.session.destroy();
        console.log('Logging out...')
        res.redirect('/');
    }


}
var users = new Users();
module.exports = users;
