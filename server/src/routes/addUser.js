// import express from 'express';
// import mongoose from 'mongoose';
// import User from '../models/userInfo';
// // import PersonalData from '../models/personalData';
// // import UserPersonalData from '../models/sendPersonalData';

// const router = express.Router();



// let passport = require('passport'),
//     LocalStrategy = require('passport-local').Strategy;

//     passport.use(new LocalStrategy(

//      function(username, password, done) {
//         User.findOne({ username: username }, function(err, user) {
//         if (err) { return done(err); }
//          if (!user)
//          {
//                   return done(null, false, { message: 'Incorrect username.' });
//          }

//              if (!user.validPassword(password))
//         {

//                 return done(null, false, { message: 'Incorrect password.' });
//               }
//         return done(null, user);
//         });
//         }
//     ));


// passport.serializeUser(function(user, done) {
//    done(null, user.id);
// });

// passport.deserializeUser(function(id, done) {
//    User.findById(id, function (err, user) {
//       done(err, user);
//    });
// });




// router.use(require('serve-static')(__dirname + '/../../public'));
// router.use(require('cookie-parser')());

// router.use(require('express-session')({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));

// router.use(passport.initialize());
// router.use(passport.session());


// router.post('/loginreq',
//     passport.authenticate('local', { successRedirect: '/jfj', failureRedirect: '/' })
// );

// router.post('/saveUser', (req, res) => {
// let user;
// user = {user: req.body};
//   User.create(user, (err, result) => {
//     // console.log('saved to database')

//      res.json(result);

//   })
// })




// export default router;