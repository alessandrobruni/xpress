const PORT = process.env.PORT || 4433;
const express = require('express');//http library
const mongoose = require('mongoose');// db mng
const cookieSession = require('cookie-session');
const passport = require('passport');//auth mng
const keys = require('./config/keys');
//db conf
require('./models/user');
//auth conf
require('./services/passport');

//db conection
mongoose.connect(keys.mongoURI);

//application binding
const app = express();

//MIddlewares
//using the middelware mng 4 cookie--------------------------------------------------------
app.use(
    cookieSession({
        maxAge: 1*24*60*60*1000,
        keys:   [keys.cookieKey]
    })
);

// using middleware to ensure that initialize Passport.js inthe application, 
//typically before setting up route handlers
app.use(passport.initialize());
app.use(passport.session());//this middleware will populate req.user with the current user.

//routes-------------------------------------------------------------------------------------
require('./routes/authRoutes')(app);

//activating app
app.listen(PORT);
