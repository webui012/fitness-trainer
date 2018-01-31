import express from 'express';
import mongoose from 'mongoose';
import Sale from '../models/sale';

const router = express.Router();

router.get('/', (req, res) => {
    Sale.find()
        .then(sales => {
            sales ? res.status(200).json(sales) :
                res.status(404).json( {error: "Error"})
        })
        .catch(e => res.status(500).json( {error: e}))
});


router.post('/', (req, res) => {
    const sale = new Sale({
        _id: mongoose.Types.ObjectId(),
        img: req.body.img,
        expireDate: req.body.expireDate,
        title: req.body.title,
        description: req.body.description,
        longDescription: req.body.longDescription
    })

    sale.save()
        .then(sale => res.status(200).json(sale))
        .catch(e => res.status(500).json({ error: e }))
})


export default router;
