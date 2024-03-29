const express = require("express")
const route = express.Router();

const {postFunction, loginuser} = require("../services/authservices")

route.post("/", postFunction);
route.post("/login", loginuser)

module.exports = route