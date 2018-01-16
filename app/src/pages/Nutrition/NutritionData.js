import icon_1 from '../../images/nutrition/icon1.svg';
import icon_2 from '../../images/nutrition/icon2.svg';
import icon_3 from '../../images/nutrition/icon3.svg';

const NutritionData = {
    nutritions: [
        {
            title: 'Индивидуальный подход',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, laboriosam.',
            iconUrl: icon_3
        },
        {
            title: 'Стремительный рост показателей',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, laboriosam.',
            iconUrl: icon_2
        },
        {
            title: 'Поддержка 24/7',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, laboriosam.',
            iconUrl: icon_1
        },
    ],
    textNutrition: [ 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.' ],
    textTitle: [ 'Как это работает' ],
    slider: {
        slides: [
            {
                url: 'http://budapest2010.com/wp-content/uploads/2017/02/gWHD-n3Dirk.jpg',
                alt: 'Foot'
            },

            {
                url: 'http://budapest2010.com/wp-content/uploads/2017/02/gWHD-n3Dirk.jpg',
                alt: 'Right eat'
            },

            {
                url: 'http://budapest2010.com/wp-content/uploads/2017/02/gWHD-n3Dirk.jpg',
                alt: 'Body'
            }
        ],
        sliderParams: {
            containerClass: 'slider',
            paginationCustomizedClass: 'pagination',
            autoplay: true,
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
                clickable: true
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            },
            spaceBetween: 0,
            speed: 1000,
            loop: true,
        }
    },
    buttonText: 'Составить план питания',
    foodPic: 'https://cdn0.iconfinder.com/data/icons/kameleon-free-pack-rounded/110/Food-Dome-128.png',
    foodText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ducimus nisi modi soluta inventore corrupti. Laborum magni veniam facere eius, ut similique ratione et quidem dignissimos. Minus, omnis ducimus necessitatibus consequuntur iusto, vero fuga optio ab. Laudantium harum minima obcaecati sapiente maiores molestiae, totam laboriosam. Molestiae repellat debitis veniam sed?'
};

export default NutritionData;