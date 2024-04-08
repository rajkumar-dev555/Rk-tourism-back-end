// const aa = require("express")
// const app =aa.Router()
const bcrypt = require("bcrypt")

const user = require("../tables/user.js")
const { uservalidation } = require("../validation/validat.js");
// const user = require("../tables/user.js");

module.exports.postFunction = async (req, res) => {
   console.log(req.body);
   const { email, password } = req.body;
   const value = uservalidation(req.body)
   if (value.error != undefined) return res.send(value)
   // let mydate = req.body.dob.split("/");
   // let month = parseInt(mydate[1]);
   // let year = parseInt(mydate[2]);

   // if ((2024 - year) < 20) {
   //    return res.send({
   //       message: " 18 years above"
   //    })

   // }





   let regi = await user.find({ $or: [{ email }, { password }] });
   if (regi.length != 0)
      return res.status(400).send({ message: "email or password alread exit." });

   
   const reg = user({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      phonenumber: req.body.phonenumber,
      // dob: req.body.dob,
      
   })
   const salt = await bcrypt.genSalt(2);
   reg.password = await bcrypt.hash(reg.password, salt)
   
   const result = await reg.save()
   res.send(result)
}


exports.loginuser = async (req, res) => {
   const { email, password } = req.body;
   const users = await user.findOne({
      $or: [{ email }],
   }).select({ username: 1, email: 1, password: 1, phonenumber: 1});
   if (!users)
      return res.status(500).send({
         status:500, 
         payload: users,
         message: "User not found",
         error: "email or password moght be worng"
      });
// console.log(users);
   const validapassword =   bcrypt.compare(password, users.password);
   // console.log(validapassword);
   if (!validapassword) return res.status(400).send("Invalid email or password.");
   const result = {
      _id: users._id,
      username: users.username,
      email: users.email,
      phonenumber: users.phonenumber,
      // dob: users.dob,
      role: users.role
   };
   console.log(result);
   res.send({
      // status:200
      result
   })
}