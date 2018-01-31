import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  serviceOrderNextStep,
  serviceOrderPageLoad,
  serviceOrderPrevStep,
  serviceOrderPageRequest,
  servcieOrderFormRequest
} from '../../redux/actions';
import {
  ServiceToogleFields,
  AdditionalInfoFields
} from 'Components';
import { reduxForm, isInvalid, formValueSelector } from 'redux-form';

import { Loader, Dimmer } from 'semantic-ui-react'
import './ServiceOrder.scss';

class ServiceOrder extends Component {

  static propTypes = {
    step: PropTypes.number,
    nextStep: PropTypes.func,
    invalid: PropTypes.bool,
    data: PropTypes.object,
  };

  formHandler = event => {
    event.preventDefault();

    const data = {
      ...this.props.myValues,
    };

    this.props.orderFormRequest(data)
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
          <form onSubmit={this.formHandler} className='service-order-form'>
            {
              !this.props.sendData ?
                this.chooseStep() :
                <Dimmer active inverted>
                  <Loader inverted content='Идет отправка данных' />
                </Dimmer>
            }
          </form>
        </div>
      : <Dimmer active inverted>
        <Loader inverted content='Загрузка' />
      </Dimmer>
    );
  }
}

const selector = formValueSelector('serviceOrder');

const mapStateToProps = state => ({
  step: state.serviceOrderForm.step,
  data: state.serviceOrderForm.data,
  sendData: state.serviceOrderFormDataSend.sendData,
  invalid: isInvalid('serviceOrder')(state),
  myValues: selector(state, 'serviceType', 'trainingPurpose')
});

const mapDispatchToProps = dispatch => ({
  nextStep: bindActionCreators(serviceOrderNextStep, dispatch),
  prevStep: bindActionCreators(serviceOrderPrevStep, dispatch),
  pageLoad: bindActionCreators(serviceOrderPageLoad, dispatch),
  pageRequest: bindActionCreators(serviceOrderPageRequest, dispatch),
  orderFormRequest: bindActionCreators(servcieOrderFormRequest, dispatch)
});

ServiceOrder = reduxForm({
  form: 'serviceOrder',
  destroyOnUnmount: false, // a unique name for this form
})(ServiceOrder);

export default connect(mapStateToProps, mapDispatchToProps)(ServiceOrder);
