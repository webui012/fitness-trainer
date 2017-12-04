import React, {Component} from 'react'
import styles from './Service.scss'

class Service extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    const imgSrc = '../../../images/' + this.props.imgSrc + '.png';
    const imgSource = {
        backgroundImage: `url(${imgSrc})`
    }

    return (
      <div className='service' style={imgSource}>
        <h2>{this.props.serviceName}</h2>
        <p>Learn more</p>
      </div>
    )
  }
}

export default Service;
