import "@babel/polyfill";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import passport from "passport";
// import cron from "node-cron";

const {exec} = require('child_process');

import products from"./routes/products";
import analytics from"./routes/analytics";
import user from"./routes/user";
import customer from"./routes/customer";
import order from"./routes/order";
import orderdetail from"./routes/orderdetail";
import cart from"./routes/cart";
import shippinginfo from"./routes/shippinginfo";
import shippingmethod from"./routes/shippingmethod";
import wishlist from"./routes/wishlist";

const app = express();
const port = process.env.PORT || 8080;

import "./auth/auth";

import db from "./db/models";

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cors());
app.use(express.static('public'));
app.use('/products',  products);
app.use('/analytics', passport.authenticate("jwt", {session: false}), analytics);
app.use('/user', user);
app.use('/order', order);
app.use('/orderdetail', orderdetail);
app.use('/customer', passport.authenticate("jwt", {session: false}), customer);
app.use('/cart', cart);
app.use('/shippinginfo', shippinginfo);
app.use('/shippingmethod', shippingmethod);
app.use('/wishlist', wishlist);

db.sequelize.sync().then(() => {
  app.listen(port, function () {
      console.log(`b2c antey - listening on port ${port}!!`);
  });
  // cron.schedule('* */2 * * *', () => {
  //   exec('yarn products:update', (err) => {
  //     if (err) {
  //       console.error(err);
  //     }
  //   });
  // });
});