var express = require('express');
var router = express.Router();
const bodymen = require('bodymen');
const querymen = require('querymen')
const userController = include('controllers/user.js')

/* Test POST */
router.post('/', bodymen.middleware({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    password: {
      type: String,
      required: true
    },
    user: {
      type: String,
      required: true
    }
}), (req, res, next) => {
    return userController.create(req, res);
});

/* Test Get */
// router.get('/get', querymen.middleware({
//     first_name: {
//         type: String,
//         required: true
//     },
//     last_name: {
//         type: String,
//         required: true
//     }
// }), ({ querymen }, res, next) => {
//     return userController.get(req, res);
//     return get(querymen.query, res)
// })

router.get('/get', (req, res, next) => {
    return userController.get(req, res);
})

module.exports = router;
