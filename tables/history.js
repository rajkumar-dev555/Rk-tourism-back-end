const mongodb = require("mongoose")

const historyschema = new mongodb.Schema({
    userid:String,
    packageid:String
})

const history = mongodb.model("historys", historyschema)
module.exports = history