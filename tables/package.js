const mongodb = require("mongoose")


const Packageschema = new mongodb.Schema({
    place:String,
    packagename:String,
    date:String
})

const package = mongodb.model("Packages", Packageschema)

module.exports =package