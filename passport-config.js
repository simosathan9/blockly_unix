const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./blockly_unix_database.db');

// Google OAuth2 Strategy
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: 'http://localhost:3000/auth/google/callback'
    },
    function (accessToken, refreshToken, profile, done) {
      // Find user by Google ID in the database
      db.get(
        'SELECT * FROM users WHERE googleId = ?',
        [profile.id],
        (err, row) => {
          if (err) {
            return done(err);
          }

          if (!row) {
            // Insert a new user if one does not exist
            db.run(
              `INSERT INTO users (googleId, username, email) VALUES (?, ?, ?)`,
              [profile.id, profile.displayName, profile.emails[0].value],
              function (err) {
                if (err) {
                  return done(err);
                }

                // Retrieve the newly created user
                db.get(
                  'SELECT * FROM users WHERE googleId = ?',
                  [profile.id],
                  (err, newRow) => {
                    if (err) {
                      return done(err);
                    }
                    if (!newRow) {
                      return done(new Error('Failed to retrieve new user'));
                    }
                    return done(null, newRow); // Return the new user with ID
                  }
                );
              }
            );
          } else {
            return done(null, row); // Return the existing user
          }
        }
      );
    }
  )
);

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
    if (user && user.id) {
      done(null, user.id);
    } else {
      done(new Error('User ID is missing or invalid'));
    }
  });

  passport.deserializeUser((id, done) => {
    // Find user by ID in the database
    db.get('SELECT * FROM users WHERE id = ?', [id], (err, user) => {
      if (err) {
        return done(err);
      }
      if (!user) {
        return done(new Error('User not found'));
      }
      done(null, user); // If user is found, pass it to the next middleware
    });
  });
}
module.exports = initialize;
