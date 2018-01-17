import express from 'express';


const router = express.Router();

const salesData = {
    title: 'Акции',
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


let salesAtricles = JSON.stringify(salesData);

router.post('/sales', (req, res) => {
        salesArticles
})


export default router;
