//manages the strategies for user authentications
const passport = require('passport');
// Ensure that you require the Google authentication strategy in your Node.js application where you set up passport.js:
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy; //is the specific strategy
// whe have to sign in to google API to register our application 
// and create our ClienID and ClientSecret
//create keys file in a config folder, save the client ID
const keys = require('../config/keys');

//use schema mongoose
const mongoose = require('mongoose');
const User = mongoose.model('users');


//init passport, authenticate user with Google
// giving the options details
passport.use(
    new GoogleStrategy({
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback'
    },
    (accessToken, refreshtoken, profile, done) => {
        console.log('profile', profile);
        new User({ googleId: profile.id}).save();
    })
);

//session mng
passport.serializeUser((user,done) => {
    done(null,user.id);
})
passport.deserializeUser((id,done) => {
    User.findById(id).then( user =>
        done(null,user)
    );
})
