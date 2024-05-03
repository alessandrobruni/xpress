const express = require('express');

//manages the strategies for user authentications
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy; //is the specific strategy


const app = express();

//init passport, authenticate user with Google
passport.use(new GoogleStrategy());
// whe have to sign in to google API to register our application 
// and create our ClienID and ClientSecret
//create keys file in a config folder, save the client ID


const PORT = process.env.PORT || 4433;
app.listen(PORT);
