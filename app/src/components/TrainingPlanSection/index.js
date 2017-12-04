import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
//import VideoTraining from '../VideoTraining'
//import ImageTraining from '../ImageTraining'
import Text from '../Text'
import ButtonTraining from '../ButtonTraining'
import Slider from '../Slider'
//import image1 from '../../images/image1.svg'


function TrainingPlanSection(){
  return(

    <div className = 'TrainingPlanSection'>
      <Header />
      <div cLassName = 'trainingPlan'>
        <Text text='Lorum ipse...........'/>
      </div>

      <div cLassName = 'trainingReview'>
        <Slider />
        <Text text='Lorum ipse...........'/>
        <ButtonTraining text = 'START'/>
      </div>
      <Footer />
    </div>

    )
}
  //VideoTraining videoId='1SOHhg67b3I'
  //<ImageTraining src = 'image1' />
export default TrainingPlanSection
