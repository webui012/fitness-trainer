import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  serviceOrderNextStep,
  serviceOrderPageLoad,
  serviceOrderPrevStep,
  serviceOrderPageRequest,
} from '../../redux/actions';
import {
  ServiceToogleFields,
  AdditionalInfoFields
} from 'Components';
import { reduxForm, isInvalid } from 'redux-form';

import { Card, Icon, Image, Button, Header, Loader, Dimmer } from 'semantic-ui-react'
import './ServiceOrder.scss';

class ServiceOrder extends Component {

  static propTypes = {
    step: PropTypes.number,
    nextStep: PropTypes.func,
    invalid: PropTypes.bool,
    data: PropTypes.object,
  };

  componentDidMount() {
    this.props.pageRequest();
  }

  chooseStep = () => {
    switch (this.props.step) {
      case 1:
        return <ServiceToogleFields
            data={this.props.data.serviceToogleFields}
            step={this.props.step}
            nextStep={this.props.nextStep}
            invalid={this.props.invalid} />;
      case 2:
        return <AdditionalInfoFields
            data={this.props.data.additionalInfoFields}
            step={this.props.step}
            prevStep={this.props.prevStep}
            invalid={this.props.invalid} />;
      default:
        return <p>Something go wrong</p>;
    }
  };

  render() {
    return (
      this.props.data ?
        <div className='service-order'>
          <span className='progress-step'>Step {this.props.step}</span>
          <progress max={2} value={this.props.step} />
          <form className='service-order-form'>
            {this.chooseStep()}
          </form>
        </div>
      : <Dimmer active inverted>
        <Loader inverted content='Загрузка' />
      </Dimmer>
    );
  }
}

const mapStateToProps = state => ({
  step: state.serviceOrderForm.step,
  // initialValues: state.serviceOrderForm.data,
  data: state.serviceOrderForm.data,
  invalid: isInvalid('service-order')(state),
});

const mapDispatchToProps = dispatch => ({
  nextStep: bindActionCreators(serviceOrderNextStep, dispatch),
  prevStep: bindActionCreators(serviceOrderPrevStep, dispatch),
  pageLoad: bindActionCreators(serviceOrderPageLoad, dispatch),
  pageRequest: bindActionCreators(serviceOrderPageRequest, dispatch),
});

ServiceOrder = reduxForm({
  form: 'service-order',
  destroyOnUnmount: false, // a unique name for this form
})(ServiceOrder);

export default connect(mapStateToProps, mapDispatchToProps)(ServiceOrder);
