const passport = require('passport');

module.exports = (app) => {
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
    );

}