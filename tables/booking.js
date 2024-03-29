const mongodb = require("mongoose")


const Bookingschema = new mongodb.Schema({

    name:String,
    email:String,
    packagename:String,
    date:String,
    phonenumber:String,
    taveldestination:String,
   



})

const Booking = mongodb.model("bookingdetails", Bookingschema);
module.exports=Booking