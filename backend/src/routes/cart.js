import express from "express";
import { Cart } from "../db/models";
import { Product } from "../db/models";

const router = express.Router();
const { Op } = require("sequelize");

router.post('/get', (req, res) => {
  try {
    Product.hasMany(Cart)
    Cart.belongsTo(Product)
    Cart.findAll({
      where: {
        CustomerID: req.body.data.user.CustomerID
      },
      include: Product
    }).then((cart) => { 
      res.json(cart)
    })
  } catch(err) {
    res.json(err)
  }
});

router.post('/add', async (req, res) => {
  try {
    const cart = await Cart.create({
      CustomerID: req.body.auth.data.user.CustomerID,
      ProductID: req.body.product.id,
      Quantity: req.body.product.quantity,
      createAt: Date.now(),
      updateAt: Date.now(),
    })
    res.json(cart)
  } catch (err) {
    // console.log(err)
    res.json(err)
  }
});

router.post('/remove', (req, res) => {
  try {
    const cart = Cart.destroy({
      where: {
        [Op.and]: [
          { CartID: req.body.removeItem.id },
          { CustomerID: req.body.auth.data.user.CustomerID }
        ]
      },
    })
    res.json(cart)
  } catch (err) {
    res.json(err)
  }
});

router.post('/increase', (req, res) => {
  try {
    const cart = Cart.update({
      Quantity: req.body.selectedItem.quantity
    },{
      where: {
        [Op.and]: [
          { CartID: req.body.selectedItem.id },
          { CustomerID: req.body.auth.data.user.CustomerID }
        ]
      },
    })
    res.json(cart)
  } catch (err) {
    res.json(err)
  }
});

router.post('/decrease', (req, res) => {
  try {
    const cart = Cart.update({
      Quantity: req.body.selectedItem.quantity
    },{
      where: {
        [Op.and]: [
          { CartID: req.body.selectedItem.id },
          { CustomerID: req.body.auth.data.user.CustomerID }
        ]
      },
    })
    res.json(cart)
  } catch (err) {
    res.json(err)
  }
});

router.post('/clear', (req, res) => {
  try {
    const cart = Cart.destroy({
      where: {
        [Op.and]: [
          { CustomerID: req.body.auth.data.user.CustomerID }
        ]
      },
    })
    res.json(cart)
  } catch (err) {
    res.json(err)
  }
});

module.exports = router;
