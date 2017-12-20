import React, {Component} from 'react';
import {
  ServiceToogleFields,
  AdditionalInfoFields
} from 'Components';
import './ServiceOrder.scss';

class ServiceOrder extends Component {
  constructor(props){
    super(props)
    this.state = {
      step: 2
    }
  }

  chooseStep = () => {
    switch (this.state.step) {
      case 1:
        return <ServiceToogleFields />
      case 2:
        return <AdditionalInfoFields />
      default:
        return <ServiceToogleFields />
    }
  }

  render(){
    return (
      <div className='service-order'>
        <span className='progress-step'>Step {this.state.step}</span>
        <progress className='progress' max={2} value={this.state.step}></progress>
        <form action=''>
          {this.chooseStep()}
        </form>
      </div>
    )
  }
}

export default ServiceOrder