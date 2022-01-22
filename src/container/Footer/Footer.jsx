import React from 'react';
import { images } from '../../constants';
import './Footer.scss';

function Footer() {
  return (
    <div className="app__footer app__flex app__padding">
      <div className="app__footer-text">
        <h2>Take a coffee & chat with me</h2>
      </div>

      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <img src={images.email} alt="email" />
          <p>hello@micael.com</p>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="phone" />
          <p>+1 (123) 456-7890</p>
        </div>
      </div>

      <div className="app__footer-form">
        <div>
          <input type="text" placeholder="Your Name" />
        </div>
        <div>
          <input type="email" placeholder="Your Email" />
        </div>
        <div>
          <textarea
            placeholder="Your Message"
          />
        </div>
        <button type="button">Send Message</button>
      </div>
    </div>
  );
}

export default Footer;
