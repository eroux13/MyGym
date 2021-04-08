const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcrypt')

function initialize(getUserByEmail, getUserById) {
    const authenticateUser = async (email, password, done) => {
        const user = getUserByEmail(email)

        // If no user matches the email
        if (user == null) {
            return done(null, false, { message: 'No user with that email' })
        }

        // Otherwise, checks password against user's password in the database. If it matches, returns the user
        try {
            if (await bcrypt.compare(password, user.password)) {
                return done(null, user)
            } else {
                return done(null, false, { message: 'Incorrect password' })
            }
        } catch (e) {
            return done(e);
        }
    }

    // Uses the Local Strategy with "email" as our username field, since that's how our users sign in
    passport.use(new LocalStrategy({ usernameField: 'email' }, authenticateUser))
    passport.serializeUser((user, done) => done(null, user.id))
    passport.deserializeUser((id, done) => {
        return done(null, getUserById(id))
    })
}

module.exports = passport;