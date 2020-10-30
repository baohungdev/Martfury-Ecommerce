import express from "express";
import { Order } from "../db/models";

const router = express.Router();

router.post('/get/list', (req, res) => {
  Order.findAll({
    where: {
      CustomerID: req.body.data.user.CustomerID
    }
  }).then((order) => {
    res.json(order)
  })
});

module.exports = router;
