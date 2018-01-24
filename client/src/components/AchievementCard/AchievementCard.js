import React from 'react';
import PropTypes from 'prop-types';
import './AchievementCard.scss';

const AchievementCard = props => {
  const { imgSrc, headerText, dateText } = props.content;

  return (
    <div className='achievement-card'>
      <img className='achievement-image' src={imgSrc} />
      <div className='achievement-text'>
        <h3 className='text-header'>{headerText}</h3>
        <p className='text-date'>{dateText}</p>
      </div>
    </div>
  );
};

AchievementCard.propTypes = {
  content: PropTypes.shape({
    imgSrc: PropTypes.string,
    headerText: PropTypes.string,
    dateText: PropTypes.string,
  }),
};

export default AchievementCard;
