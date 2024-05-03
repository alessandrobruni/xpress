const express = require('express');
//manages the strategies for user authentications
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy; //is the specific strategy
// whe have to sign in to google API to register our application 
// and create our ClienID and ClientSecret
//create keys file in a config folder, save the client ID
const keys = require('./config/keys');

//init passport, authenticate user with Google
// giving the options details
passport.use(
    new GoogleStrategy({
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback'
    },
        (accessToken) => {
            console.log(accessToken);
        })
);

const app = express();

// create route handlers
// internal identifier is 'google'
// scope : what acces we want to have , in this case we want ask gogle 
// for the user profile and the email 
app.get(
    '/auth/google',
    passport.authenticate('google', {
        scope: ['profile', 'email']
    })
);

const PORT = process.env.PORT || 4433;
app.listen(PORT);
