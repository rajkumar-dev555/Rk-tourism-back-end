const express = require("express")
const route = express.Router();

const{travelpackage, getAllTpackage, GetTpackageone, PackPlace} = require("../services/Tservices")

route.post("/tp", travelpackage)
route.get("/atp", getAllTpackage)
route.get("/packageall/:packagename", GetTpackageone)
route.get("/packageplace/:placename", PackPlace)


module.exports=route

