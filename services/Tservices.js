const travel =require("../tables/Tpackage.js")
module.exports.travelpackage = async (req, res) =>{

    const travels = travel({
        packagename:req.body.packagename,
        placename:req.body.placename,
        // countryname:req.body.countryname,
        // statename:req.body.statename,
       
        packageprice:req.body.packageprice,
        // startdate:req.body.sdate,
        // enddate:req.body.edate,
        // noofdays:req.body.noofdays,
        // age:req.body.age,
        date:req.body.date,
        packagedescription:req.body.packagedescription,
        content:req.body.content
       
    
    }) 
    
    const result = await travels.save()
       res.send(result)
    

}

exports.getAllTpackage = async (req, res) => {
    let result = await  travel.find()
    res.send(result)
}

