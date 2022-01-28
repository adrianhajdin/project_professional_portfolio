/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-has-content */

import React from 'react';

function NavigationDots({ active }) {
  return (
    <div className="app__navigation">
      <a
        href="#header"
        className="app__navigation-dot"
        style={active === 'header' ? { backgroundColor: '#313BAC' } : {}}
      />
      <a
        href="#about"
        className="app__navigation-dot"
        style={active === 'about' ? { backgroundColor: '#313BAC' } : {}}
      />
      <a
        href="#work"
        className="app__navigation-dot"
        style={active === 'projects' ? { backgroundColor: '#313BAC' } : {}}
      />
      <a
        href="#skills"
        className="app__navigation-dot"
        style={active === 'skills' ? { backgroundColor: '#313BAC' } : {}}
      />
      <a
        href="#testimonial"
        className="app__navigation-dot"
        style={active === 'testimonials' ? { backgroundColor: '#313BAC' } : {}}
      />
      <a
        href="#footer"
        className="app__navigation-dot"
        style={active === 'footer' ? { backgroundColor: '#313BAC' } : {}}
      />
    </div>
  );
}

export default NavigationDots;
