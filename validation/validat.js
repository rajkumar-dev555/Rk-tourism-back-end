const Joi = require("joi")

module.exports.uservalidation = (data) => {
    const user = Joi.object({
        username: Joi.string().alphanum().min(3).max(15).required(),
        email: Joi.string().email().required(),
        password: Joi.string().required(),
        phonenumber: Joi.string().required(),
        // dob: Joi.string().required(
    })

    return user.validate(data)
}


