const express = require("express")
const route = express.Router();

const {getAllusers, getusersByFeilds, updateUser, userDelete} = require("../services/userservices")


route.get("/", getAllusers);
route.get("/getbyfeilds", getusersByFeilds)
route.put("/update/:id", updateUser)
route.delete("/delet/:id", userDelete)

module.exports = route