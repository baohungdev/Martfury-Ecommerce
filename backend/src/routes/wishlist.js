import express from "express";
import { Wishlist } from "../db/models";
import { Product } from "../db/models";

const router = express.Router();
const { Op } = require("sequelize");

router.post('/get', (req, res) => {
  try {
    Product.hasMany(Wishlist)
    Wishlist.belongsTo(Product)
    Wishlist.findAll({
      where: {
        CustomerID: req.body.data.user.CustomerID
      },
      include: Product
    }).then((wishlist) => { 
      res.json(wishlist)
    })
  } catch(err) {
    res.json(err)
  }
});

router.post('/add', async (req, res) => {
  try {
    const wishlist = await Wishlist.create({
      CustomerID: req.body.auth.data.user.CustomerID,
      ProductID: req.body.product.id,
      createAt: Date.now(),
      updateAt: Date.now(),
    })
    res.json(wishlist)
  } catch (err) {
    // console.log(err)
    res.json(err)
  }
});

router.post('/remove', (req, res) => {
  try {
    const wishlist = Wishlist.destroy({
      where: {
        [Op.and]: [
          { WishlistID: req.body.removeItem.id },
          { CustomerID: req.body.auth.data.user.CustomerID }
        ]
      },
    })
    res.json(wishlist)
  } catch (err) {
    res.json(err)
  }
});

router.post('/clear', (req, res) => {
  try {
    const wishlist = Wishlist.destroy({
      where: {
        [Op.and]: [
          { CustomerID: req.body.auth.data.user.CustomerID }
        ]
      },
    })
    res.json(wishlist)
  } catch (err) {
    res.json(err)
  }
});

module.exports = router;
