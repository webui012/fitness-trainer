import React,{ Component } from 'react';
import PropTypes from 'prop-types';
import './AdminCabinet.scss';
import AdminCabinetData from './AdminCabinetData'

class AdminCabinet extends Component {
  constructor(props) {
    super(props) {
      this.data = AdminCabinetData;
    }
  }

  render() {
    return
  }
}

AdminCabinet.propTypes = {
  key: PropTypes.number,
  title: PropTypes.string,
  data: PropTypes.string
};

export default AdminCabinet;
