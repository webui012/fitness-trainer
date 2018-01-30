import React, { Component } from 'react';
import PropTypes from 'prop-types';
import YouTube from '@u-wave/react-youtube';
import {
  Spinner,
  TrainerAvatarBlock,
  AboutTrainer,
  TextBlockList,
  AchievementCardList,
} from 'Components';
import { connect } from 'react-redux';
import { aboutGetDataRequest } from '../../redux/actions/about';
import './About.scss';

class About extends Component {
  static propTypes = {
    aboutGetDataRequest: PropTypes.func.isRequired,
    data: PropTypes.shape({
      avatarBlock: PropTypes.object,
      aboutTrainer: PropTypes.arrayOf(PropTypes.object),
      aboutTextBlocks: PropTypes.arrayOf(PropTypes.object),
      trainerAchievements: PropTypes.arrayOf(PropTypes.object),
      videoId: PropTypes.string,
    }),
  };

  componentDidMount() {
    this.props.aboutGetDataRequest();
  };

  render() {
    if (this.props.data) {
      const {
        avatarBlock,
        aboutTrainer,
        aboutTextBlocks,
        trainerAchievements,
        videoId,
      } = this.props.data;

      return (
        <section className='about'>
          <div className='container'>
            <h1 className='caption'>Информация о тренере</h1>
            <div className='data-wrap'>
              <TrainerAvatarBlock
                  avatarSrc={avatarBlock.trainerAvatarSrc}
                  trainerName={avatarBlock.trainerName}
                  weightCategory={avatarBlock.trainerWeightCategory}
                  icons={avatarBlock.trainerSocialIcons} />
              <AboutTrainer paragrafs={aboutTrainer} />
            </div>
            <TextBlockList data={aboutTextBlocks} />
            <AchievementCardList achievements={trainerAchievements} />
            <YouTube video={videoId} className='video-about' />
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
