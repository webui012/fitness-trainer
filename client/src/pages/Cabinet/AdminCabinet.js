import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { adminCabinetGetData } from '../../redux/actions';
import { Loader, Dimmer } from 'semantic-ui-react';
import { UserCards } from 'Components';

class AdminCabinet extends Component {

  static propTypes = {
    data: PropTypes.array,
    errorMessage: PropTypes.bool,
    adminCabinetGetData: PropTypes.func,
  };

  componentDidMount() {
    this.props.adminCabinetGetData();
  };

  render() {
    return (this.props.data
      ? <div className='admin-cabinet'>
        <UserCards data={this.props.data} />
      </div>
      : <Dimmer active inverted>
        <Loader inverted content='Загрузка' />
      </Dimmer>
    );
  }
}

const mapStateToProps = state => ({
  data: state.adminCabinetGetData.data,
});

const mapDispatchToProps = dispatch => ({
  adminCabinetGetData: () => dispatch(adminCabinetGetData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminCabinet);
