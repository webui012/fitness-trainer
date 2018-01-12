import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Slider } from 'Components';
import { loadHomePage } from '../../redux/actions';
import { getHomePageData, getSliderData } from '../../redux/reducers/HomePage/homePage';

class Homepage extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.loadHomePage()
  }

  render() {
    console.log(this.props.sliderData)
    return <h1> slider </h1>
  }
}

function mapStateToProps(state) {
  return {
    homePageData: getHomePageData(state),
    sliderData: getSliderData(state)
  }
}

Homepage.propTypes = {
  homePage: PropTypes.object
};

export default connect(mapStateToProps, { loadHomePage })(Homepage)
