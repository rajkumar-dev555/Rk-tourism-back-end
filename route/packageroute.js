const express = require("express")
const route = express.Router();

const{packages, packageGetID,sample} =require("../services/packageservices")

route.post("/packages", packages)
route.get("/packageid/:id", packageGetID)
route.get("/sample", sample )

module.exports = route
