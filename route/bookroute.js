const express = require("express")

const route = express.Router();

const {Bookingdetail} = require("../services/bookservices")

route.post("/bn", Bookingdetail)

module.exports=route
