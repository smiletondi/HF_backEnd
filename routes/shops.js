const router= require("express").Router();

const shopsController= require("../controllers/shops");

// /shops/ => GET
router.get("/", shopsController.getShops);

// /shops/:id => POST
router.get("/:id", shopsController.getShop);

// /shops/like => PUT
router.post("/:id/like", shopsController.postLike);

// /shops/dislike => PUT
router.post("/:id/dislike", shopsController.postDislike);

module.exports= router;