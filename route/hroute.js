const express = require("express")
const route = express.Router();

const{histroyview} = require("../services/hservices")

route.get("/hv", histroyview)

module.exports = route 