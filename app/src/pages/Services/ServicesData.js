import khudaev1 from '../../images/khudaev.png';
import trainPlan from '../../images/training-plan.jpg';
import nutritionPlan from '../../images/nutrition-plan.jpg';
import khudaev2 from '../../images/khudaev2.png';

const ServicesData = {
  services: [
    {
      id: 0,
      path: 'online-training',
      serviceName: 'Онлайн тренировка 1 на 1',
      imgSrc: khudaev1
    },
    {
      id: 1,
      path: 'training-plan',
      serviceName: 'Индивидуальная программ',
      imgSrc: trainPlan
    },
    {
      id: 2,
      path: 'nutrition-plan',
      serviceName: 'Правильное питание',
      imgSrc: nutritionPlan
    },
    {
      id: 3,
      path: '',
      serviceName: 'Другие услуги',
      imgSrc: khudaev2
    }
  ],
  motivations: [
    {
      text: 'Начать тренироваться',
      heading: 'Стань лучше прямо сейчас!',
      sectionStyle: 'motivation-section',
      buttonStyle: 'service-button',
    },
    {
      text: 'Заказать онлайн тренировку',
      heading: 'Стань лучше прямо здесь!',
      sectionStyle: '',
      buttonStyle: '',
    }
  ]

};

export default ServicesData;