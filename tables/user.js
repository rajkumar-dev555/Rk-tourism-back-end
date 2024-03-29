const mongodb = require("mongoose")

const userschema = new mongodb.Schema({
    username:String,
    email: String,
    password: String,
    phonenumber:String,
    dob:String,
    role:{
        type:String,
        enum:["user","admin"],
        default:"user"
    },
    status:{
        type:String,
        enum: {values:["Active","Inactive"], message: '{VALUE} is not valid.'},
        default:"Active"
    }
})

const user = mongodb.model("users", userschema)
module.exports=user

