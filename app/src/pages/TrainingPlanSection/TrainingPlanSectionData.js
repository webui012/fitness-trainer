const TrainingPlanSectionData = {
  videoId: 'duXyGlVSacM',
  image: [
    {
      imgPath: '../src/images/imageTrainingPlan.jpg',
      description: 'training plan img'
    }
  ],
  textPlan: [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.'
  ],
  textReview: [
    'Sed ut perspiciatis, unde omnis iste natus error sit voluptatem. '
  ],
  slider: {
    slides: [
      {
        url: 'https://www.hdwallpapers.in/walls/pushup_workout-HD.jpg',
        alt: 'Pushup Workout'
      },

      {
        url: 'https://media.self.com/photos/5867a314bf5e49f716efe864/2:1/pass/workout-package_1.png',
        alt: 'Workout Pakage'
      },

     {
        url: 'http://cdn-img.health.com/sites/default/files/styles/medium_16_9/public/styles/main/public/gettyimages-498315681.jpg?itok=qqWRWFw9',
        alt: 'Running Workout'
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
    motivations: [
    {
      text: 'Начать тренироваться',
      heading: 'Стань лучше прямо сейчас!',
      sectionStyle: 'motivation-section',
      buttonStyle: 'service-button',
    }
    ],
  }

  export default TrainingPlanSectionData
