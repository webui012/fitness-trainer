import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {nextStep, pageLoad, prevStep} from '../../redux/actions';
import {
  ServiceToogleFields,
  AdditionalInfoFields
} from 'Components';
import {reduxForm} from 'redux-form';
import './ServiceOrder.scss';

class ServiceOrder extends Component {
  componentDidMount(){
    this.props.pageLoad(this.props.step);
  }

  handleSubmit = () => {
    // code for submit
  };

  chooseStep = () => {
    switch (this.props.step) {
      case 1:
        return <ServiceToogleFields step={this.props.step} nextStep={this.props.nextStep} />
      case 2:
        return <AdditionalInfoFields step={this.props.step} prevStep={this.props.prevStep} />
      default:
        return <p>What step 3?</p>
    }
  };

  render(){
    return (
      <div className='service-order'>
        <span className='progress-step'>Step {this.props.step}</span>
        <progress max={2} value={this.props.step} />
        <form className='service-order-form'>
          {this.chooseStep()}
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    step: state.orderForm.step
  }
};

const mapDispatchToProps = dispatch => {
  return {
    nextStep: bindActionCreators(nextStep, dispatch),
    prevStep: bindActionCreators(prevStep, dispatch),
    pageLoad: bindActionCreators(pageLoad, dispatch)
  }
};

ServiceOrder = connect(mapStateToProps, mapDispatchToProps)(ServiceOrder);

export default reduxForm({
  form: 'service-order' // a unique name for this form
})(ServiceOrder)