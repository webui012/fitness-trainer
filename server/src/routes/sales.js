import express from 'express';
import mongoose from 'mongoose';
import Sale from '../models/sale';

const router = express.Router();


/*const salesData = {
 saleItems: [
 {
 id: 0,
 img: 'https://goo.gl/Lea9B3',
 expireDate: '01.01.2017',
 title: 'До 3 месяцев занятий Pole-Dance',
 description: 'С сертификатом вы получаете 1, 2 или 3 месяца занятий Pole-Dance, Pole Dance Exotic, стрейчинг в школе танцев «Pole Energy» со скидкой до 67%. Предложение актуально для новых клиентов.'
 },
 {
 id: 1,
 img: 'https://goo.gl/oTR8Rs',
 expireDate: '01.01.2017',
 title: 'Безлимитное посещение фитнеса в фитнес-клубе «Сокол»',
 description: 'С сертификатом вы получаете 2 или 3 месяца занятий стретчингом в школе танцев «Masters of Dance»со скидкой до 69%. Предложение актуально только для новых клиентов.'
 },
 {
 id: 2,
 img: 'https://goo.gl/e2aH7N',
 expireDate: '01.01.2017',
 title: 'Разработка и корректировка индивидуальной программы тренировок',
 description: 'Месяц консультаций диетолога и составление плана питания и тренировок для одного или двоих от велнес-клуба «Худей легко» со скидкой до 80%.',
 },
 ]
 }



 router.get('/', (req, res) => {
 return res.status(200).json(salesData);
 })*/



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


/*
 router.get('/sales', (req, res) => {
 test.listCollections(data => {
 console.log(res.json(data));
 }
 )
 })
 */

export default router;
