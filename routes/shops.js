const router= require("express").Router();

const shopsController= require("../controllers/shops");

router.get("/shops", shopsController.getShops);

module.exports= router;