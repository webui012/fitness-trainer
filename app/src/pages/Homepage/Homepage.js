import React from 'react';
import { Slider } from 'Components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getHomePageData } from '../../redux/reducers/HomePage';

const Homepage = props => <Slider data={props.homepage} />

function mapStateToProps(state) {
  return {
    homepage: getHomePageData(state)
  }
}

Homepage.propTypes = {
  homepage: PropTypes.object
};

export default connect(mapStateToProps, null)(Homepage)
