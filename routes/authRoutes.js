const passport = require('passport');

module.exports = (app) => {

    // create route handlers
    // internal identifier is 'google'
    // scope : what acces we want to have , in this case we ask google 
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

    app.get('/api/logout',
        (req, res) => {
            req.logout();
            res.send(req.user);
        }
    )

    app.get('/api/current_user',
        (req, res) => {
            res.send(req.user);
        }
    )

    app.get('/api/current_session',
    (req, res) => {
        res.send(req.session);
    }
)

}