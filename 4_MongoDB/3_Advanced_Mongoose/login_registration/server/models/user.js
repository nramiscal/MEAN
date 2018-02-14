
var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var email_regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

var UserSchema = new mongoose.Schema({
    first_name:{
        type:String,
        required:[true,"Please enter first name."],
        minlength:[2,"First name cannot be less than 2 characters."],
    },

    last_name:{
        type:String,
        required:[true,"Please enter last name."],
        minlength:[1,"Last name cannot be less than 2 characters."],    },

    email: {
        type:String,
        required:[true,"Please enter email address."],
        validate:{
            validator:function(email){
                return email_regex.test(email);
            },
            message:"Invalid E-mail format."
        }
    },

    password: {
        type:String,
        required:[true,"Please enter password."],
        minlength:[8,"Password cannot be less than 8 characters."]
    },

    password_confirm:{
        type:String,
        required:[true,"Please enter password confirmation."],
        minlength:[8,"Password confirmation cannot be less than 8 characters."],
        validate:{
            validator:function(confirm_pass){
                return confirm_pass == this.password;
            },
            message:"Passwords must match."
        }
    },

    birthday: {
        type:Date,
        required:[true,"Please enter birthday."],
        }

},{timestamps:true});

// UserSchema.pre('save', function(done){
//     bcrypt.hashSync(this.password, bcrypt.genSaltSync(14), function(err, hashedpw){
//         if(err){
//             console.error(err);
//             return
//         }
//         this.password = hashedpw;
//         this.password_confirm = null;
//         done();
//     });

UserSchema.pre('save', function(done){
    var hashedpw = bcrypt.hashSync(this.password, bcrypt.genSaltSync(8));
    this.password = hashedpw;
    this.password_confirm = undefined;
    done();

});

mongoose.model("User", UserSchema);
