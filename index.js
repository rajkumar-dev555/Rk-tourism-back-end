const express = require("express")
require("dotenv").config()
require("./database/mongodb")
const cros = require("cors")
const auth = require("./route/auth")
const Troute = require("./route/Troute")
const mroute = require("./route/mroute")
const userroute = require("./route/userroute")
const review = require("./route/reviewroute")
const book = require("./route/bookroute")

const app = express()
app.use(cros())
app.use(express.json())


app.use(auth)
app.use(Troute)
app.use(mroute)
app.use("/get",userroute)
app.use(review)
app.use(book)

 
// app.get("/get",(req,res)=>{
//     res.send({
//         messsage:"get api"
//     })
// })

app.listen(3001)