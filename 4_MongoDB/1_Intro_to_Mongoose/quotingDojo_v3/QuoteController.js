let Quote = require("mongoose").model("Quote");
// let moment = require("moment");

class QuoteController{

    // Retrieves all quotes and renders them to our "quotes.ejs":
    all(req,res){
        // order by createdAt descending order
        Quote.find({}).sort({ createdAt: -1}).exec((err, quotes)=>{
            if(err){
                res.render("index",{errors:quote.errors});
            }else{
                // for (let quote of quotes){
                //     console.log(typeof(quote.createdAt)); // object!
                // }
                // let current_time = moment();
                res.render("quotes",{quotes:quotes});
            }
        })
    }

    // A post route for creating a new quote:
    create(req,res){
        let quote = new Quote(req.body);

        quote.save((err)=>{
            if(err){
                res.render("index",{errors:quote.errors});
            }else{
                console.log("succcessfully added a quote!");
                res.redirect("/");
            }
        })
    }

}

module.exports = new QuoteController();
