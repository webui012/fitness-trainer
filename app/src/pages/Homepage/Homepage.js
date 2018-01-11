import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getHomePageData } from '../../redux/reducers/homePage';
import { Slider } from 'Components';

const Homepage = props => {
  const sliderData = props.homePage.sliderData

  return <Slider data={sliderData} />
}

const mapStateToProps = state => ({
  homePage: getHomePageData(state)
})

Homepage.propTypes = {
  homePage: PropTypes.object
};

export default connect(mapStateToProps, null)(Homepage)
