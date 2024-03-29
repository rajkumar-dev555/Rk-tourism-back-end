
const members = require("../tables/members")


module.exports.addmembers = async (req, res)=> {

    const member = members({

        name:req.body.name,
        age:req.body.age,
        phonenumber:req.body.phonenumber,
        gender:req.body.gender,
        email:req.body.email,
        packageid:req.body.packageid,
        userid:req.body.userid


    })

    const result = await member.save()
    res.send(result)
 

}