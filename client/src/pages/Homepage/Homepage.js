import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getHomePageData, getLoadingStatus } from '../../redux/reducers/homePage';
import { fetchHomepage } from '../../redux/actions';
import { Slider } from 'Components';
import { Divider, Dimmer, Loader } from 'semantic-ui-react'


class Homepage extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchHomepage()
  }

  render() {
    const { isLoading, data } = this.props

    return (
      <div>
        { isLoading && <Dimmer active inverted><Loader/></Dimmer>}
        <Slider data={data.slider} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  data: getHomePageData(state),
  isLoading: getLoadingStatus(state)
});

export default connect(mapStateToProps, { fetchHomepage, getLoadingStatus })(Homepage);
