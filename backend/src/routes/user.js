import express from "express";
import bcrypt from "bcryptjs";
import passport from "passport";
import { User, Customer } from "../db/models";
import config from "../config";
import helpers from "../helpers/helpers";

const router = express.Router();

router.post('/signup', (req, res) => {
  Customer.findOne({
    where: {
      Email: req.body.email
    }
  }).then((customer) => {
    if (customer) {
      res.status(400).send("Customer with this email is already exists");
    } else {
      bcrypt.hash(req.body.password, config.bcrypt.saltRounds, (err, hash) => {
        Customer.create({
          Email: req.body.email,
          Password: hash
        }).then((customer) => {
          res.json(customer);
        });
      });
    }
  }).catch((err) => {
    res.status(err.statusCode).send(err.message);
  })
});

router.post('/signin/local', (req, res) => {
  Customer.findOne({
    where: {
      Email: req.body.email,
    }
  }).then(user => {
    bcrypt.compare(req.body.password, user.Password).then((equal) => {
      if (equal) {
        const body = {
          id: user.CustomerID,
          email: user.Email
        };
        const token = helpers.jwtSign({ user: body });
        res.json({
          user,
          success: true,
          token
        })
      } else {
        res.status(400).send("Wrong password");
      }
    });
  }).catch(() => {
    res.status(400).send("Customer with this email does not exist");
  })

});

router.get('/signin/google', (req, res, next) => {
  passport.authenticate("google", { scope: ["profile", "email"], state: req.query.app })(req, res, next);
});

router.get('/signin/google/callback', passport.authenticate("google", { failureRedirect: "/login", session: false }),
  function (req, res) {
    socialRedirect(res, req.query.state, req.user.token, config);
  }
);

router.get('/signin/facebook', (req, res, next) => {
  passport.authenticate("facebook", { scope: ["profile", "email"], state: req.query.app })(req, res, next);
});

router.get('/signin/facebook/callback', passport.authenticate("facebook", { failureRedirect: "/login", session: false }),
  function (req, res) {
    socialRedirect(res, req.query.state, req.user.token, config);
  }
);

router.get('/signin/microsoft', (req, res, next) => {
  passport.authenticate("microsoft", { scope: ["https://graph.microsoft.com/user.read openid"], state: req.query.app })(req, res, next);
});

router.get('/signin/microsoft/callback', passport.authenticate("microsoft", { failureRedirect: "/login", session: false }),
  function (req, res) {
    socialRedirect(res, req.query.state, req.user.token, config);
  }
);

function socialRedirect(res, state, token, config) {
  let url;
  let fullPath = /^http(s?):\/\//.test(state);
  if (fullPath) {
    url = state;
  } else {
    url = config.hostUI + `${config.portUI ? `:${config.portUI}` : ``}` + `${state ? `/${state}` : ``}`;
  }
  res.redirect(url + "/#/login?token=" + token);
}

module.exports = router;
