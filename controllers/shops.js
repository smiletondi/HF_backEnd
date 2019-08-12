const Shop = require("../models/shop");
const User = require("../models/user");


module.exports.getShops = async (req, res, next) => {
    const shopList = await Shop.find();
    res.status(200).json(shopList);
}
module.exports.getShop = (req, res, next) => {
    const {
        id
    } = req.params;
    console.log(id);
    res.status(200).json({
        id,
        distance: 5,
        name: "Aswak Salam",
        imageUrl: "https://picsum.photos/200?random=1"
    });
}
module.exports.getNearbyShops = async (req, res, next) => {
    const {
        userId
    } = req;

    const shopList = await Shop.find();

    User.findById(userId).then(user => {
        const {
            preferredShops
        } = user;
        const finalList = shopList.map(item => {
            if(!preferredShops.includes(item))
                return item;
        });
        res.status(200).json(finalList);
    }).catch(() => {
        const error = new Error("User No Found, Fetching shops failed");
        error.statusCode = 404;

        next(error);
    })
}
module.exports.getPreferredShops = (req, res, next) => {
    const {
        userId
    } = req;

    User.findById(userId).then(user => {
        res.status(200).json(user.preferredShops);
    }).catch(() => {
        const error = new Error("User No Found, Fetching shops failed");
        error.statusCode = 404;

        next(error);
    })
}
module.exports.postLike = (req, res, next) => {
    const {
        id
    } = req.params;
    const data = req.body;
    console.log(data);
    console.log(id);
    res.status(200).json({
        message: "i like the shop " + id,
        data
    });
}
module.exports.postDislike = (req, res, next) => {
    const {
        id
    } = req.params;
    const data = req.body;
    res.status(200).json({
        message: "i don't like the shop " + id,
        data
    });
}