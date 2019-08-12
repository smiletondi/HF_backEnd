const router= require("express").Router();

const shopsController= require("../controllers/shops");
const isAuth= require("../_helpers/isAuth");

// /shops/ => GET
router.get("/", isAuth, shopsController.getShops);
// /shops/preferredShops => GET
router.get("/preferredShops", isAuth, shopsController.getPreferredShops);
// /shops/nearbyShops => GET
router.get("/nearbyShops", isAuth, shopsController.getNearbyShops);

// /shops/:id => POST
router.get("/:id", shopsController.getShop);

// /shops/like => PUT
router.post("/:id/like", shopsController.postLike);

// /shops/dislike => PUT
router.post("/:id/dislike", shopsController.postDislike);

module.exports= router;