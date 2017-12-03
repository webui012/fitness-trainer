import React from 'react';
import Header from '../Header';
import Slider from '../Slider';
import Main from '../Main';
import Footer from '../Footer';
import styles from './style.scss';

const App = () =>
  <div className={styles.App}>
    <Header />
    <Slider />
    {/* <Main /> */}
    <Footer />
  </div>;

export default App;
