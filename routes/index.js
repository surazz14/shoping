var express = require('express');
var router = express.Router();
var path = require('path');
var assert = require('assert');
var csrf = require('csurf');
var csrfProtection = csrf();
router.use(csrfProtection);
var Product = require('../Models/product');
var passport = require('passport');


/* GET home page. */
 router.get('/', function(req, res, next) {
  Product.find(function(err, docs){
    var productChunks=[];
    var chuckSize=3;
    for (var i = 0; i<Product.length; i+=chuckSize) {
      productChunks.push(docs.slice(i,i+chuckSize));
    
    }
      res.render('index', { title: 'Star', products:productChunks });
  });

 });
 
router.get('/user/signup',function(req, res, next){
  res.render('user/signup',{csrfToken: req.csrfToken()});
});
router.get('/user/profile',function(req,res,next){
  res.render('user/profile');
})
router.post('/user/signup',

  passport.authenticate('local.signup',{ 
    successRedirect: '/user/profile',
    failureRedirect:'/',
    failureFlash: true 
})

);

module.exports = router;
