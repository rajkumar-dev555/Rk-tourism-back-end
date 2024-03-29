const mongodb = require("mongoose")

const reviewschema = new mongodb.Schema({
    userid:String,
    packageid:String,
    reviewmessage:String,
    star:String,
    topice:String
})

const review = mongodb.model("reviews", reviewschema)

module.exports = review