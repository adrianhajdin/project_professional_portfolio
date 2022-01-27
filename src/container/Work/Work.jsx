import React from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';

import NavigationDots from '../../components/NavigationDots';
import SocialMedia from '../../components/SocialMedia';
import { works } from '../../constants/dummy';
import './Work.scss';

function Work() {
  return (
    <div className="app__container app__primarybg" id="work">
      <SocialMedia />
      <div className="app__works app__flex">
        <div className="app__head-text">
          <h2>My Creative <span>Portfolio</span></h2>
        </div>

        <div className="app__work-filter">
          {['UI/UX', 'Web App', 'Mobile App', 'React JS'].map((item, index) => (
            <div key={index} className="app__work-filter-item">
              {item}
            </div>
          ))}
        </div>

        <div className="app__work-portfolio">
          {works.map((work, index) => (
            <div className="app__work-item" key={index}>
              <div className="app__work-img">
                <img src={work.imgUrl} alt={work.name} />

                <div className="app__work-hover">
                  <div>
                    <AiFillEye />
                  </div>
                  <div>
                    <AiFillGithub />
                  </div>
                </div>
              </div>

              <div className="app__work-content">
                <h4>{work.title}</h4>

                <div className="app__work-tag">
                  <p>{work.tags[0]}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <NavigationDots active="projects" />
    </div>
  );
}

export default Work;
