var mongoose = require("mongoose");

var QuoteSchema = new mongoose.Schema({
  content: String,
  name: String,
}, {timestamps: true })

mongoose.model("Quote", QuoteSchema);
