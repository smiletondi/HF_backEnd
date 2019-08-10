var express = require('express');
var router = express.Router();

const indexController= require("../controllers/index");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// /signin  => POST
router.post("/signin", indexController.postSignin);
// /signup  => POST
router.post("/signup", indexController.postSignup);

module.exports = router;
