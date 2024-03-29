const express= require("express")
const route = express.Router();


const{addmembers} = require("../services/mservices")

route.post("/mm", addmembers)

module.exports=route