import React from 'react';

import NavigationDots from '../../components/NavigationDots';
import Overlay from '../../components/Overlay/Overlay';
import SocialMedia from '../../components/SocialMedia';
import { images } from '../../constants';
import './Header.scss';

function Header() {
  return (
    <div className="app__container app__padding" id="header">
      <Overlay />
      <SocialMedia />
      <div className="app__header app__flex">
        <div className="app__header-info">
          <div className="app__header-badge">
            <span>👋</span>
            <div>
              <p>Hello, I am</p>
              <h1>Micael</h1>
            </div>
          </div>

          <div className="app__header-description">
            <p>
              I am a software developer based in the city of New York, America. I am passionate about building
              software that improves the lives of people.
            </p>
          </div>

          <div className="app__header-btns">
            <button type="button" className="hireme">Hire Me</button>
            <button type="button" className="downloadcv">Download CV</button>
          </div>
        </div>

        <div className="app__header-img">
          <img src={images.profile} alt="profile_bg" />

          <img src={images.circle} alt="profile_circle" className="overlay_circle" />
        </div>
      </div>
      <NavigationDots active="header" />
    </div>
  );
}

export default Header;
