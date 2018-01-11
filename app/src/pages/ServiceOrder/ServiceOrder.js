import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {serviceOrderNextStep, serviceOrderPageLoad, serviceOrderPrevStep} from '../../redux/actions';
import {
  ServiceToogleFields,
  AdditionalInfoFields
} from 'Components';
import {reduxForm, isInvalid} from 'redux-form';
import data from './serivceOrderData';
import './ServiceOrder.scss';


class ServiceOrder extends Component {
  componentDidMount(){
    this.props.pageLoad(data.trainingData);
  }

/*
  handleSubmit = () => {
  };
*/

  chooseStep = () => {
    switch (this.props.step) {
      case 1:
        return <ServiceToogleFields step={this.props.step} nextStep={this.props.nextStep} invalid={this.props.invalid} />
      case 2:
        return <AdditionalInfoFields step={this.props.step} prevStep={this.props.prevStep} invalid={this.props.invalid} />
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
    step: state.orderForm.step,
    initialValues: state.orderForm.data,
    invalid: isInvalid('service-order')(state),
  }
};

const mapDispatchToProps = dispatch => {
  return {
    nextStep: bindActionCreators(serviceOrderNextStep, dispatch),
    prevStep: bindActionCreators(serviceOrderPrevStep, dispatch),
    pageLoad: bindActionCreators(serviceOrderPageLoad, dispatch)
  }
};


ServiceOrder = reduxForm({
  form: 'service-order',
  destroyOnUnmount: false, // a unique name for this form
})(ServiceOrder);

ServiceOrder = connect(mapStateToProps, mapDispatchToProps)(ServiceOrder);

export default ServiceOrder