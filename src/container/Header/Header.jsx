import React from 'react';
import { motion } from 'framer-motion';

import NavigationDots from '../../components/NavigationDots';
import SocialMedia from '../../components/SocialMedia';
import { images } from '../../constants';
import './Header.scss';

function Header() {
  return (
    <div className="app__container" id="header">
      <SocialMedia />
      <div
        className="app__header app__flex"
      >
        <motion.div
          animate={{ x: [-100, 0], opacity: [0, 1] }}
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className="app__header-info"
        >
          <div className="app__header-badge app__flex">
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Hello, I am</p>
              <h1 className="head-text">Micael</h1>
            </div>
          </div>

          <div style={{ marginTop: 20 }}>
            <p className="p-text">
              I am a software developer based in the city of New York, America. I am passionate about building
              software that improves the lives of people.
            </p>
          </div>

          <div className="app__header-btns">
            <button type="button" className="hireme">Hire Me</button>
            <button type="button" className="downloadcv">Download CV</button>
          </div>
        </motion.div>

        <motion.div
          animate={{ x: [100, 0], opacity: [0, 1] }}
          whileInView={{ x: [100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className="app__header-img"
        >
          <img src={images.profile} alt="profile_bg" />
          <motion.img
            animate={{ scale: [0, 1] }}
            whileInView={{ scale: [0, 1] }}
            transition={{ duration: 1, ease: 'easeInOut' }}
            src={images.circle}
            alt="profile_circle"
            className="overlay_circle"
          />
        </motion.div>
      </div>
      <NavigationDots active="header" />
    </div>
  );
}

export default Header;
