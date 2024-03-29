const mongodb = require("mongoose")


const memberschema = new mongodb.Schema({
    // packagename:String,
    name:String,
    age:String,
    phonenumber:String,
    gender:String,
    email:String,
    packageid:String,
    userid:String

})

const members = mongodb.model("members", memberschema)
module.exports = members