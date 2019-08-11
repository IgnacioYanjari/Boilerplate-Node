'use strict'
const environment = process.env;
const jwt = require('jsonwebtoken');

let secretKey = environment.JWT_KEY;
let expiresIn = environment.EXPIRES_IN;

function sign(payload, options) {

  // options = {
  //   issuer: "Authorizaxtion/Resource/This server",
  //   subject: "iam@user.me",
  //   audience: "Client_Identity" // this should be provided by client
  // }

  // Token signing options
  var signOptions = {
     expiresIn:  expiresIn,    // 30 days validity
     algorithm:  "HS256"
  };
  return jwt.sign(payload, secretKey, signOptions);
}

function verify(token, options){

   // options = {
   //   issuer: "Authorizaxtion/Resource/This server",
   //   subject: "iam@user.me",
   //   audience: "Client_Identity" // this should be provided by client
   // }

  var verifyOptions = {
      expiresIn:  expiresIn,
      algorithm:  ["HS256"]
  };
   try{
     return jwt.verify(token, secretKey, verifyOptions);
   } catch (err){
     return err;
   }
}

function decode(token) {
     return jwt.decode(token, {complete: true});
     // returns null if token is invalid
}

module.exports = {
 sign,
 verify,
 decode
}
