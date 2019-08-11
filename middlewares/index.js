
const verifyJwt = require('./verifyJwt.js');

// call another middlewares inside the folder.
let middlewares = {};
middlewares['verifyJwt'] = verifyJwt;

module.exports = middlewares;
