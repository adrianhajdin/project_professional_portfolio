import React from 'react';

import NavigationDots from '../../components/NavigationDots';
import SocialMedia from '../../components/SocialMedia';
import { abouts } from '../../constants';
import './About.scss';

function About() {
  return (
    <div className="app__container app__padding app__whitebg" id="about">
      <SocialMedia />
      <div className="app__about app__flex">
        <div className="app__head-text">
          <h2>I Know that <span>Good Design</span> meant <br /> <span>Good Business</span></h2>

          <div className="app__profiles">
            {abouts.map((about, index) => (
              <div className="app__profile-item" key={about.title + index}>
                <img src={about.imgUrl} alt={about.title} />
                <h2>{about.title}</h2>
                <p>{about.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <NavigationDots active="about" />
    </div>
  );
}

export default About;
