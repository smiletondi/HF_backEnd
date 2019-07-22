var express = require('express');
var router = express.Router();

const indexController= require("../controllers/index");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/login", indexController.getLogin);
// /login  => POST
router.post("/login", indexController.postLogin);

module.exports = router;
