import React from 'react';
import { Slider } from 'Components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getSliderData } from '../../redux/reducers/HomePage';

const Homepage = props => <Slider data={props.sliderData} />

function mapStateToProps(state) {
  return {
    sliderData: getSliderData(state)
  }
}

Homepage.propTypes = {
  sliderData: PropTypes.object
};

export default connect(mapStateToProps, null)(Homepage)
