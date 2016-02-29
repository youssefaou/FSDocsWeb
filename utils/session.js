/**
 * Contains the utils functions for checking the existence of the current session
 * And Vice-Versa
 */

exports.isLoggedIn = function(req,res,next){
    if(typeof req.session.user === 'undefined' || req.session.user === null){
        res.redirect('/login');
    }
    next(); // else execute the next Middleware
};