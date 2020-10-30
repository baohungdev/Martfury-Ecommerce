import express from "express";
import { ShippingMethod } from "../db/models";

const router = express.Router();

router.post('/get/method', (req, res) => {
    try {
        ShippingMethod.findAll({
        }).then((shippingMethod) => {
            res.json(shippingMethod)
        })
    } catch(err) {
        res.json(err)
    }
});

module.exports = router;