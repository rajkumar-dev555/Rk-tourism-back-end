const mongodb = require("mongoose")


const travelschema = new mongodb.Schema({
    packagename:String,
    placename: String,
    // countryname:String,
    // statename:String,
   
    packageprice:String,
    // startdate:String,
    // enddate:String,
    // noofdays:String,
    // age:String,
    date:String,
    packagedescription:String,
    
    content:Object,

})

const travel = mongodb.model("travels", travelschema);
module.exports= travel

