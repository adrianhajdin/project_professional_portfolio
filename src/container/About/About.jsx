import React from 'react';
import { motion } from 'framer-motion';

import NavigationDots from '../../components/NavigationDots';
import SocialMedia from '../../components/SocialMedia';
import { abouts } from '../../constants';
import './About.scss';

function About() {
  return (
    <div
      className="app__container app__whitebg"
      id="about"
    >
      <SocialMedia />
      <motion.div
        animate={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__about app__flex"
      >
        <div className="app__head-text">
          <h2>I Know that <span>Good Design</span> meant <br /> <span>Good Business</span></h2>

          <div className="app__profiles">
            {abouts.map((about, index) => (
              <motion.div
                whileInView={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5, type: 'tween' }}
                className="app__profile-item"
                key={about.title + index}
              >
                <img src={about.imgUrl} alt={about.title} />
                <h2>{about.title}</h2>
                <p>{about.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
      <NavigationDots active="about" />
    </div>
  );
}

export default About;
