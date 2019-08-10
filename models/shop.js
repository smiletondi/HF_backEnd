const mongoose = require("mongoose");

const shopSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    distance: {
        type: String,
        required: true
    }
});

const Shop = mongoose.model("Shop", shopSchema);

module.exports = Shop;