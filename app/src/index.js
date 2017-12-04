import React from 'react';
import { render } from 'react-dom';
import './css/reset.scss'
import './css/fonts.scss'
import './css/common.scss'
//import App from './components/App';
import TrainingPlanSection from './components/TrainingPlanSection'

//render(<App />, document.getElementById('root'));
render(<TrainingPlanSection />, document.getElementById('root'));
