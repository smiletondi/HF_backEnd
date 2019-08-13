var express = require('express');
var router = express.Router();
const User = require("../models/user");

// /* GET users listing. */
// router.get('/', function (req, res, next) {
//   User.find().then(userList => {
//     return res.status(200).json(userList);
//   }).catch(err => next(err));
// });
// /* GET users listing. */
// router.get('/:id', function (req, res, next) {
//   // extracting the id from the params
//   const {
//     id
//   } = req.params;

//   User.findOne({_id: id}).then(user => {
//     res.status(200).json(user);
//   }).catch((err) => {
//     const error = new Error("User not found");
//       error.statusCode = 404;
//       next(error);
//   });
// });

module.exports = router;