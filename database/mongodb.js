const mongoose = require("mongoose")

mongoose.connect(`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@fifkart.mwsqgi4.mongodb.net/?retryWrites=true&w=majority`)
.then(()=> console.log("Mongodb connected succesfully..."))
.catch((error)=> console.log(error))

module.exports = mongoose.connection