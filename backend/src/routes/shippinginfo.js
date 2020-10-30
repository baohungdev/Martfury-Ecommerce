import express from "express";
import { ShippingInfo } from "../db/models";
import { PaymentMethod } from "../db/models";
import { Order } from "../db/models";
import { OrderDetail } from "../db/models";

const router = express.Router();

function makeid(length) {
    var result           = '';
    var characters       = '0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }

router.post('/process', async (req, res) => {
    console.log(req.body.data)
    try {
        const shipping = await ShippingInfo.create({
            CustomerID: req.body.data.auth.data.user.CustomerID,
            ShippingMethodID: req.body.data.shipping.shippingMethod[0].ShippingMethodID,
            firstname: req.body.data.shipping.addressInfo.firstName,
            lastname: req.body.data.shipping.addressInfo.lastName,
            address: req.body.data.shipping.addressInfo.address,
            apartment: req.body.data.shipping.addressInfo.apartment,
            city: req.body.data.shipping.addressInfo.city,
            postalcode: req.body.data.shipping.addressInfo.postalCode,
            email: req.body.data.shipping.addressInfo.email,
            emailnotify: req.body.data.shipping.addressInfo.keepUpdateNews,
            savefornext: req.body.data.shipping.addressInfo.keepUpdate,
            createAt: Date.now(),
            updateAt: Date.now(),
        })
        const payment = await PaymentMethod.create({
            CustomerID: req.body.data.auth.data.user.CustomerID,
            ShippingInfoID: shipping.ShippingInfoID,
            PaymentMethod: req.body.data.payment.PaymentMethod,
            CardNumber: req.body.data.payment.cardNumber,
            createAt: Date.now(),
            updateAt: Date.now(),
        })
        const order = await Order.create({
            CustomerID: req.body.data.auth.data.user.CustomerID,
            ShippingInfoID: shipping.ShippingInfoID,
            OrderNumber: makeid(10),
            OrderDate: Date.now(),
            TransactStatus: 'Pending',
            Paid: true,
            createAt: Date.now(),
            updateAt: Date.now(),
        })

        const orderItems = []
        req.body.data.cart.cartItems.map((item) => {
            orderItems.push(
                {
                    ProductID: item.id,
                    OrderID: order.OrderID,
                    OrderNumber: order.OrderNumber,
                    Price: item.price,
                    Quantity: item.quantity,
                    createAt: Date.now(),
                    updateAt: Date.now(),
                }
            )
        })

        const orderDetail = await OrderDetail.bulkCreate(
            orderItems
        )

        res.json({
            shipping,
            payment,
            order,
            orderDetail
        })

    } catch(err) {
        res.json(err)
    }
});

module.exports = router;
