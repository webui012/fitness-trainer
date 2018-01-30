import React from 'react';
import { TextBlock } from 'Components';
import PropTypes from 'prop-types';
import './TextBlockList.scss';

const TextBlockList = props =>
  <section className='text-block-list'>
    {props.data.map(textBlock =>
      <TextBlock
          key={textBlock.id}
          header={textBlock.header}
          paragrafs={textBlock.data}
      />
    )}
  </section>;

TextBlockList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    header: PropTypes.string,
    data: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string,
      paragraf: PropTypes.string,
    })),
  })),
};

export default TextBlockList;
