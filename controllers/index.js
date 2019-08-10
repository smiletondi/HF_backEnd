module.exports.postSignin= (req, res, next) => {
    const email= req.body.email;
    const password= req.body.password;
    
    res.status(200).json({
        message: "you are logged in",
        email,
        password
    })
}
module.exports.postSignup= (req, res, next) => {
    const email= req.body.email;
    const password= req.body.password;

    res.status(200).json({
        message: "you just sign up",
        email,
        password
    })
}