var passport = require('passport');
var mongoose = require('mongoose');
var LocalStrategy = require('passport-local').Strategy

var User = mongoose.model('User');
module.exports = function(){
    passport.use(new LocalStrategy({
            usernameField:'userName',
            passwordField:'password'
        },
        function(username,password,done){
            User.findOne({userName:username}).exec(function(err,user){
                if(user && user.authenticate(password)){
                    return done(null,user);
                }else{
                    return done(null,false);
                }
            });
        }
    ));

    passport.serializeUser(function(user, done) {
        if(user){
            done(null, user.id);
        }
    });

    passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user) {
            if(user){
                done(err, user);
            } else{
                return done(null,false);
            }
        });
    });
}