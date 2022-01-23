import React from 'react';

import NavigationDots from '../../components/NavigationDots';
import SocialMedia from '../../components/SocialMedia';
import { experiences, skills } from '../../constants';
import './Skills.scss';

function Skills() {
  return (
    <div className="app__container app__padding app__whitebg">
      <SocialMedia />
      <div className="app__skills app__flex">
        <div className="app__head-text">
          <h2>Skills & Experiences</h2>
        </div>

        <div className="app__skills-container">
          <div className="app__skills-list">
            {skills.map((skill) => (
              <div className="app__skills-item" key={skill.name}>
                <img src={skill.icon} alt={skill.name} />
                {/* <p>{skill.name}</p> */}
              </div>
            ))}
          </div>
          <div className="app__skills-exp">
            {experiences.map((experience) => (
              <div className="app__skills-exp-item" key={experience.year}>
                <div className="app__skills-exp-year">
                  <p>{experience.year}</p>
                </div>
                <div className="app__skills-exp-works">
                  {experience.works.map((work) => (
                    <div className="app__skills-exp-work" key={work.name}>
                      <h4>{work.name}</h4>
                      <p>{work.company}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <NavigationDots active="skills" />
    </div>
  );
}

export default Skills;
