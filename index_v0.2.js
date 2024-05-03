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
        (accessToken,) => {
            console.log(accessToken);
        }),

    (accessToken, refreshtoken, profile, done) => {
        console.log('access Token', accessToken);
        console.log('refresh token', refreshtoken);
        console.log('profile', profile);
        console.log('done', done);
    })
    ;

const app = express();

// create route handlers
// internal identifier is 'google'
// scope : what acces we want to have , in this case we ask gogle 
// for the user profile and the email 
app.get(
    '/auth/google',
    passport.authenticate('google', {
        scope: ['profile', 'email']
    })
);

// handle the response from google auth, in this case the url will have the code response
app.get('/auth/google/callback',
    passport.authenticate('google')
)

const PORT = process.env.PORT || 4433;
app.listen(PORT);
