const history = require("../tables/history")

module.exports.historyview = async (req, res) => {

    const historys = history({
        userid:req.body.userid,
        packageid: req.body.packageid
    
    })
    
    const result = await historys.save()
    res.send(result)

}