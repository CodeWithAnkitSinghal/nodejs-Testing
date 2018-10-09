const db = require('./db')

module.exports.handleSignup = (email, password) => {
    
    //check if email exist
    
    db.saveUser({
        email: email,
        password: password
    });

    //send welcome message
    
}