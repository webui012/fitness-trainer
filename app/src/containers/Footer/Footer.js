import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getFooterData } from '../../redux/reducers/footer';
import {
  Logo,
  Navigation,
  Socials
} from 'Components';
import './Footer.scss';

const Footer = props => {
  const { logo, caption, socials, copyright, navigation } = props.footer;

  return (
    <footer className='main-footer'>
      <Logo data={logo} />
      <span className='logo-caption'>{caption}</span>
      <Navigation data={navigation} />
      <Socials data={socials} />
      <p className='copyright'>{copyright}</p>
    </footer>
  );
};

const mapStateToProps = state => ({
  footer: getFooterData(state),
});

Footer.propTypes = {
  footer: PropTypes.object,
};

export default connect(mapStateToProps)(Footer);
