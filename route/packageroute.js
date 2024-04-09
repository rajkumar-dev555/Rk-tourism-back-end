const express = require("express")
const route = express.Router();

const{packages, packageGetID,sample, GetPackname} =require("../services/packageservices")

route.post("/packages", packages)
route.get("/packageid/:id", packageGetID)
route.get("/sample", sample )
route.get("/packname/:packagename", GetPackname)
module.exports = route
 