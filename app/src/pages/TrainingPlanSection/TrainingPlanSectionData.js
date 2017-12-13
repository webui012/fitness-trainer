const TrainingPlanSectionData = {
  videoId: 'duXyGlVSacM',
  image: [{imgPath: '../src/images/imageTrainingPlan.jpg', description: 'training plan img' }, {imgPath: '../src/images/imageTrainingPlan.jpg', description: 'training plan img'}],
  text: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'],
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
    btnText: 'НАЧАТЬ ТРЕНИРОВАТЬСЯ!',
  }

  export default TrainingPlanSectionData
