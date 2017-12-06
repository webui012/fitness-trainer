import React from 'react';
import styles from './About.scss';
import Image from '../../Image/Image';
import Text from '../../Text/Text';
import YouTube from '@u-wave/react-youtube';
import photo from '../../../images/about_image.jpg';

const About = props =>
  <section className={styles.About}>
    <div className={styles.container}>
      <Text content='Биография' textClass={styles.caption} />
      <Image path={photo} imageClass={styles.photo} description='photo' />
      <Text content={contentText} textClass={`${styles.content} ${styles['first-paragraf']}`} />
      <Text content={contentText} textClass={styles.content} />
      <YouTube video='duXyGlVSacM' className={styles.video} />
    </div>
  </section>;

const contentText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

export default About;
