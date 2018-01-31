import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {
  ServiceSection,
  MotivationSection,
} from 'Components';
import { Loader, Dimmer } from 'semantic-ui-react'
import './Services.scss';
import {
  servicesPageRequest,
} from '../../redux/actions';

class Services extends Component {

  static propTypes = {
    data: PropTypes.object,
  };

  componentDidMount() {
    this.props.pageRequest();
  }

  render() {
    return (
      this.props.data ?
        <div className='services'>
          <ServiceSection data={this.props.data.services} />
          <MotivationSection data={this.props.data.motivations} />
        </div>
        : <Dimmer active inverted>
          <Loader inverted content='Загрузка' />
        </Dimmer>
    );
  }
}

const mapStateToProps = state => ({
  data: state.servicesPage.data,
});

const mapDispatchToProps = dispatch => ({
  pageRequest: bindActionCreators(servicesPageRequest, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Services);