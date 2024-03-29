const express = require("express")
const route = express.Router();

const{travelpackage, getAllTpackage} = require("../services/Tservices")

route.post("/tp", travelpackage)
route.get("/atp", getAllTpackage)

module.exports=route