var express = require('express');
var router = express.Router();
const bodymen = require('bodymen');
const get = require('../controllers/user.js').get

/* GET users listing. */
router.post('/', bodymen.middleware({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    }
}), function (req, res, next) {
    return get(req.bodymen.body, res);
});

module.exports = router;
