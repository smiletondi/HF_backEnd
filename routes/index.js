var express = require('express');
var router = express.Router();
const {
  body
} = require("express-validator");

const indexController = require("../controllers/index");
const User= require("../models/user");

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Express'
  });
});

// /signin  => POST
router.post("/signin", indexController.postSignin);
// /signup  => POST
    const signupChecks = [
      body("email").isEmail().withMessage("Please enter a valid email")
        .custom((value, {req})=>{
          return User.findOne({email:value}).then(user=>{
            if (user){
              return Promise.reject("Email already exist");
            }
          });
        })
        .normalizeEmail(),
        body("password").trim()
          .isLength({min: 5})
    ]
router.post("/signup", signupChecks, indexController.postSignup);

module.exports = router;