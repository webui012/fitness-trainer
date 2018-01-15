import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  serviceOrderNextStep,
  serviceOrderPageLoad,
  serviceOrderPrevStep
} from '../../redux/actions';
import {
  ServiceToogleFields,
  AdditionalInfoFields
} from 'Components';
import {reduxForm, isInvalid} from 'redux-form';
import data from './serivceOrderData';
import './ServiceOrder.scss';

class ServiceOrder extends Component {

  static propTypes = {
    step: PropTypes.number,
    nextStep: PropTypes.func,
    invalid: PropTypes.bool,
    data: PropTypes.object,
  };

  componentDidMount(){
    this.props.pageLoad(data.orderFormData);
  }

  chooseStep = () => {
    switch (this.props.step) {
      case 1:
        return <ServiceToogleFields
            data={data.serviceToogleFields}
            step={this.props.step}
            nextStep={this.props.nextStep}
            invalid={this.props.invalid} />
      case 2:
        return <AdditionalInfoFields
            data={data.additionalInfoFields}
            step={this.props.step}
            prevStep={this.props.prevStep}
            invalid={this.props.invalid} />
      default:
        return <p>Something go wrong</p>
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