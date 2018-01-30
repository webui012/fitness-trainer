import React from 'react';
import PropTypes from 'prop-types';
import './TrainerAvatarBlock.scss';

const TrainerAvatarBlock = props =>
  <section className='trainer-avatar-block'>
    <img className='trainer-avatar' src={props.avatarSrc} />
    <div className='trainer-information'>
      <h3 className='trainer-name'>{props.trainerName}</h3>
      <p className='trainer-weight-category'>{props.weightCategory}</p>
      <div className='trainer-social-icons'>
        {props.icons.map(icon =>
          <a href='#' key={icon.id}>
            <img src={icon.data} />
          </a>)}
      </div>
    </div>
  </section>;

TrainerAvatarBlock.propTypes = {
  avatarSrc: PropTypes.string.isRequired,
  trainerName: PropTypes.string.isRequired,
  weightCategory: PropTypes.string.isRequired,
  icons: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    data: PropTypes.string,
  })),
};

export default TrainerAvatarBlock;
