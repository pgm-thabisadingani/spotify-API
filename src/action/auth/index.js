import Express from 'express';
import passport from 'passport';
import passportLocal from "passport-local";
import UserDb from '../../lib/Users.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
//import Logger from './lib/Logger.js';
import dotenv from 'dotenv';

dotenv.config();

const app = Express.Router()

// connect to the database
const userData = new UserDb();

const LocalStrategy = passportLocal.Strategy;
passport.use(
  new LocalStrategy(
    { usernameField: 'username', passwordField: 'password' },
    async (username, password, done) => {
      try {
        // get user by username
        const user = await userData.findUser(username);
       
        // check if user exists
        if (!user) {
          return done(null, false, { message: 'Incorrect username.' });
        }

        // check if password is correct
        if (!(await isPasswordValid(user, password))) {
          return done(null, false, { message: 'Incorrect password.' });
        }

        return done(null, user);
      } catch (e) {
        return done(e);
      }
    }
  )
);

app.post('/login', (req, res) =>
    passport.authenticate('local', (error, user, info) => {
        if (error) {
            res.status(401).send(error);
        } else if (!user) {
            res.status(401).send(info);
        } else {
            const token = jwt.sign(user, process.env.JWT_SECRET_KEY, {
                expiresIn: parseInt(process.env.JWT_LIFETIME),
            });
            res.status(200).json({
                success: true,
                token: token,
                user: {
                    id: user.id,
                    username: user.username,
                },
            });
        }
    })(req, res)
);

/** @api: change to register action **/

app.post('/hashpassword', (req, res) => {
  bcrypt.hash(req.body.password, 10).then(function (hash) {
    res.status(200).send(hash);
  });
});

export default app;

const isPasswordValid = async (user, password) => {
  const match = await bcrypt.compare(password, user.password);
  return match;
};