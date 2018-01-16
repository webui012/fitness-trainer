import React, { Component } from 'react';
import PropTypes from 'prop-types';
import YouTube from '@u-wave/react-youtube';
import { Spinner } from 'Components';
import { connect } from 'react-redux';
import { aboutGetDataRequest } from '../../redux/actions/about';
import './About.scss';

class About extends Component {
  static propTypes = {
    aboutGetDataRequest: PropTypes.func.isRequired,
    data: PropTypes.shape({
      paragrafText: PropTypes.string,
      imageSrc: PropTypes.string,
      imageAlt: PropTypes.string,
      videoId: PropTypes.string,
    }),
  };

  componentDidMount() {
    this.props.aboutGetDataRequest();
  };

  render() {
    if (this.props.data) {
      const { paragrafText, imageSrc, imageAlt, videoId } = this.props.data;
      return (
        <section className='about'>
          <div className='container'>
            <h3 className='caption'>Биография</h3>
            <img src={imageSrc} className='photo' alt={imageAlt} />
            <p className='content first-paragraph'>{paragrafText}</p>
            <p className='content'>{paragrafText}</p>
            <YouTube video={videoId} className='video' />
          </div>
        </section>
      );
    } else {
      return (<Spinner />);
    }
  }
}

const mapStateToProps = state => ({
  data: state.aboutGetStaticData.data,
});

const mapDispatchToProps = dispatch => ({
  aboutGetDataRequest: () => dispatch(aboutGetDataRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(About);
