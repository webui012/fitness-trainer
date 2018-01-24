import React from 'react';
import PropTypes from 'prop-types';
import './AboutTrainer.scss';

const AboutTrainer = props =>
  <section className='about-trainer'>
    <h3 className='text-caption'>Основная информация</h3>
    {props.paragrafs.map(paragraf =>
      <p key={paragraf.id}>
        <span className='field-name'>{paragraf.fieldName}</span>
        {paragraf.fieldNameData}
      </p>
    )}
  </section>;

AboutTrainer.propTypes = {
  paragrafs: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    fieldName: PropTypes.string,
    fieldNameData: PropTypes.string,
  })),
};

export default AboutTrainer;
