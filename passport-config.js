/*
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');

function initialize(passport, getUserByUsername, getUserById) {
  const authenticateUser = async (username, password, done) => {
    const user = getUserByUsername(username);
    if (user == null) {
      return done(null, false, { message: 'No user found with that username' });
    }

    try {
      if (await bcrypt.compare(password, user.password)) {
        return done(null, user);
      } else {
        return done(null, false, { message: 'Password incorrect' });
      }
    } catch (e) {
      return done(e);
    }
  };

  passport.use(
    new LocalStrategy({ usernameField: 'username' }, authenticateUser)
  );
  passport.serializeUser((user, done) => done(null, user.id));
  passport.deserializeUser((id, done) => {
    return done(null, getUserById(id));
  });
}

module.exports = initialize;
*/

const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');

function initialize(passport, getUserByUsername, getUserById) {
  const authenticateUser = async (username, password, done) => {
    // Retrieve the user by username from the database
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
        // Compare the provided password with the stored hash
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

  passport.use(
    new LocalStrategy({ usernameField: 'username' }, authenticateUser)
  );

  // Serialize user into the session
  passport.serializeUser((user, done) => done(null, user.id));

  // Deserialize user from the session
  passport.deserializeUser((id, done) => {
    getUserById(id, (err, user) => {
      if (err) return done(err);
      return done(null, user);
    });
  });
}

module.exports = initialize;
