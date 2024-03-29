const user = require("../tables/user.js");
const { uservalidation } = require("../validation/validat.js");
const lodash  = require("lodash")
const mongoose = require("mongoose")


exports.getAllusers = async function(req, res) {
    let result = await user.find();
    res.send(result)
}

exports.getusersByFeilds = async (req, res) =>{
    const {_id, username, email, phonenumber} = req.body;
    // const error = uservalidation(
    //     {username, email, phonenumber},
    //      true
    // );
    //  if (error) return res.status(400).send(error);
     const result = await user.find({

        $or: [{_id}, {username}, {email},{phonenumber}],

     }).select(["-password"])
     res.send(result);
};

exports.updateUser = async (req, res) =>{
        const id = req.params.id;
      if (!mongoose.isValidObjectId(id))
          return res.status(400).send({
        message:"Invalid id"
    })  

    const {username, email, phonumber} =req.body;
    // const error = uservalidation({username, email, phonumber},true);
    // if(error) return res.status(400).send(error);

    // let result = await user.find({$or: [{email}, {phonenumber}]});
    // if(result.length !== 0)
    // return res.status(400).send({message:"email or phonenumber alredy exit"});
     const result = await user.findOne({ _id: id }).select([
        "userName",
        "email",
        "phonenumber",
      ]);

      if(lodash.isEmpty(result))
      return res.status(400).send({message:"email or phonenumber does not exit"});

      if (username) result.username = username;
      if (email) result.email = email;
      if (phonumber) result.phonenumber = phonumber;

      const response =await result.save();
      res.status(201).send({
        payload:response,
        message:"updated"
      });

      

}

// exports.userDelet = async (req, res) =>{
//     const result = await user.findByIdAndDelete({_id: req.params,id})
//      res.send("deleted")
// }

exports.userDelete = async (req, res) => {
    const id = req.params.id;
    if (!mongoose.isValidObjectId(id))
     return res.status(400).send({
              message:"invalid id"
    })

    const result = await user.findByIdAndUpdate({_id: id});
    if(!result) return res.status(400).send({
        message:"User does not exist."
    })
    result.status = "Inactive";
    await result.save();
    res.send({
        message:"user deleted."
    })
}