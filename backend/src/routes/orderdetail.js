import express from "express";
import { Orderdetail } from "../db/models";

const router = express.Router();

router.post('/', (req, res) => {
    let product = req.body;
    if (product.id) {
        delete product.id;
    }
    Orderdetail.create(req.body).then(product => {
        res.json(product);
    })

});

module.exports = router;
