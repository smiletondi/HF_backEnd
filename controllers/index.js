const {
    validationResult
} = require("express-validator");

const User = require("../models/user");

// SignIn
module.exports.postSignin = (req, res, next) => {
    const {
        email,
        password
    } = req.body;

    res.status(200).json({
        message: "you are logged in",
        email,
        password
    })
}
// SignUp
module.exports.postSignup = (req, res, next) => {
    const errors = validationResult(req);

    // Checking if errors exist
    if (!errors.isEmpty()) {
        const error = new Error("Validation failed");
        error = {
            ...error,
            statusCode: 422,
            data: errors.array()
        }

        throw error;
    }

    // Destructing email and password
    const {
        email,
        password
    } = req.body;



    res.status(200).json({
        message: "you just sign up",
        email,
        password
    })
}