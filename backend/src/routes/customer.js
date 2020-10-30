import express from "express";
import { Customer, User } from "../db/models";
// import config from "../config";

const router = express.Router();

router.post('/', function (req, res) {
  res.json(req.user);
});

router.post('/update/billing', function (req, res) {  
  Customer.findOne({
      where: {
        CustomerID: req.user.id,
        Email: req.user.email,
      }
    }).then(cus => {
      Customer.update({...req.body}, {where: {CustomerID: cus.CustomerID}}).then((customer) => {
        res.json(customer);
      }).catch((err) => {
        res.status(err.statusCode).send(err.message);
      });
    }).catch(() => {
      res.status(err.statusCode).send(err.message);
    })
});

router.post('/update', function (req, res) {
  Customer.update({...req.body, ...{
    FirstName: req.body.FirstName.split(' ')[0],
    LastName: req.body.FirstName.split(' ')[1]?req.body.FirstName.split(' ')[1]:''
  }}, {where: {CustomerID: req.user.id}}).then((user) => {
    res.json(user);
  }).catch((err) => {
    res.status(err.statusCode).send(err.message);
  });
});

router.get('/get/account', function (req, res) {
  Customer.findOne({
    where: {
      CustomerID: req.user.id
    }
  }).then((customer) => {
      if (customer) {
        res.json(customer);
      } else {
        res.status(err.statusCode).send('Invalid Account');
      }
    }).catch((err) => {
      res.status(err.statusCode).send(err.message);
    });
});

router.get('/get/address', function (req, res) {
  console.log(req.user);
  Customer.findOne({
    where: {
      CustomerID: req.user.id
    }
  }).then((customer) => {
      if (customer) {
        res.json(customer);
      } else {
        res.status(err.statusCode).send('No Address yet.');
      }
    }).catch((err) => {
      res.status(err.statusCode).send(err.message);
    });
});

module.exports = router;