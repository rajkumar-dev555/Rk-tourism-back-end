const Booking = require("../tables/booking.js")

module.exports.Bookingdetail = async (req, res) =>{

    const Booknow = Booking({
        name:req.body.username,
        email:req.body.email,
        packagename:req.body.packagename,
        date:req.body.date,
        phonenumber:req.body.phonenumber,
        traveldestination:req.body.traveldestination,

        
    })

    const result = await Booknow.save()
    res.send(result)
}


exports.getAllBooking = async (req, res) => {
    let result = await Booking.find()
    res.send(result)
}