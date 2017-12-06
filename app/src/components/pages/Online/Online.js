import React, {Component} from 'react'
import PersonalTraining from '../../PersonalTraining/PersonalTraining'
import ReviewSection from '../../ReviewSection/ReviewSection'
import MotivationSection from '../../MotivationSection/MotiovationSection'
import styles from './Online.scss'

const Online = props =>
    <div className={styles.online}>
        <PersonalTraining />
        <ReviewSection />
        <MotivationSection />
    </div>

export default Online
