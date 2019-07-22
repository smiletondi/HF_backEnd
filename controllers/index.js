module.exports.getLogin= (req, res, next) => {
    res.json({
        message: "you are logged in"
    })
}
module.exports.postLogin= (req, res, next) => {
    const name= req.body.name;

    res.json({
        message: "post login",
        name
    });
}