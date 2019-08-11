var express = require('express');
var router = express.Router();
const bodymen = require('bodymen');
const querymen = require('querymen')
const userController = include('controllers/user.js')

/* Test POST */
router.post('/login', bodymen.middleware({
    user: {
        type: String,
        required: true
    },
    password: {
      type: String,
      required: true
    }
}), (req, res, next) => {
    return userController.login(req, res);
});


module.exports = router;
