var passport = require('passport')
var User=require('../Models/user')

var LocalStrategy = require('passport-local').Strategy;
  passport.serializeUser(function(user, done) {
  done(null, user.ObjectId);
});

passport.deserializeUser(function(id, done) {
  User.findById(ObjectId, function(err, user) {
    done(err, user);
  });
});
passport.use('local.signup',new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
  },
  function(req,email, password, done) {
    console.log('error')
    User.findOne({ username: email }, function (err, user) {
      if (err) {
       console.log('error')   
       return done(err); }
});
}));