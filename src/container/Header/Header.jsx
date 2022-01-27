import React from 'react';

import NavigationDots from '../../components/NavigationDots';
import Overlay from '../../components/Overlay/Overlay';
import SocialMedia from '../../components/SocialMedia';
import './Header.scss';

function Header() {
  return (
    <div className="app__container app__padding" id="header">
      <Overlay />
      <SocialMedia />
      <div className="app__header app__flex">
        <p>Hello</p>
      </div>
      <NavigationDots active="header" />
    </div>
  );
}

export default Header;
