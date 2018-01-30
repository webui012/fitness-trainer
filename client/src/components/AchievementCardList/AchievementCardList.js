import React from 'react';
import PropTypes from 'prop-types';
import { AchievementCard } from 'Components';
import './AchievementCardList.scss';

const AchievementCardList = props =>
  <section className='achievement-list'>
    {props.achievements.map(achievement =>
      <AchievementCard key={achievement.id} content={achievement.data} />
    )}
  </section>;

AchievementCardList.propTypes = {
  achievements: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    data: PropTypes.shape({
      imgSrc: PropTypes.string,
      headerText: PropTypes.string,
      dateText: PropTypes.string,
    }),
  })),
};

export default AchievementCardList;
