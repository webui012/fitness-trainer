import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getHomePageData } from '../../redux/reducers/HomePage';
import { Slider } from 'Components';

const Homepage = props => {
  const sliderData = props.homePageData.sliderData

  return <Slider data={sliderData} />
}

const mapStateToProps = state => ({
  homePageData: getHomePageData(state)
})

Homepage.propTypes = {
  homePageData: PropTypes.object
};

export default connect(mapStateToProps, null)(Homepage)
