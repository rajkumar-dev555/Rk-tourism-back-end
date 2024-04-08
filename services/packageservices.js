const package = require("../tables/package.js")


module.exports.packages = async(req, res) => {

    const packs = package({
        place:req.body.place,
        packagename:req.body.packagename,
        date:req.body.date
    })

    const result = await packs.save()
    res.send(result)

} 


module.exports.packageGetID = async (req,res) =>{

    const result = await package.findById({_id: req.params.id})
    res.send(result)
}




module.exports.sample = (req,res)=>{
    res.send("hello")
}