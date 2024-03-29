const review = require("../tables/review")

module.exports.reviewPost = async(req, res) => {

    const reviews = review({
        userid:req.body.userid,
        packageid: req.body.packageid,
        reviewmessage: req.body.reviewmessage,
        star: req.body.star,
        topice: req.body.topice

    
    })
    const result = await reviews.save()
    res.send(result)

}

