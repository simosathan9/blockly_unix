const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./blockly_unix_database.db');

// Initialize function to set up LocalStrategy and Google OAuth
function initialize(passport, getUserByUsername, getUserById) {
  // Local Strategy for login
  const authenticateUser = async (username, password, done) => {
    getUserByUsername(username, async (err, user) => {
      if (err) {
        return done(err);
      }
      if (!user) {
        return done(null, false, {
          message: 'No user found with that username'
        });
      }

      try {
        // Compare the provided password with the stored hashed password
        if (await bcrypt.compare(password, user.password)) {
          return done(null, user);
        } else {
          return done(null, false, { message: 'Password incorrect' });
        }
      } catch (e) {
        return done(e);
      }
    });
  };

  // Use LocalStrategy for authentication
  passport.use(
    new LocalStrategy({ usernameField: 'username' }, authenticateUser)
  );

  // Serialize user into the session
  passport.serializeUser((user, done) => {
    done(null, user.id); // Χρησιμοποίησε το `id` από τη βάση δεδομένων
  });

  passport.deserializeUser((id, done) => {
    getUserById(id, (err, user) => {
      if (err) return done(err);
      return done(null, user);
    });
  });
}
module.exports = initialize;
