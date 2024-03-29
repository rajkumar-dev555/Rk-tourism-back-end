const express = require("express")
const route = express.Router();

const{reviewPost} = require("../services/reviewservices")

route.post("/rp", reviewPost)

module.exports = route