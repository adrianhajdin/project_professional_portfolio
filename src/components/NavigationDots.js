import React from 'react';

function NavigationDots({ active }) {
  const [activeDot, setActiveDot] = React.useState(active);

  return (
    <div className="app__navigation">
      <div
        className="app__navigation-dot"
        onClick={() => setActiveDot('header')}
        style={activeDot === 'header' ? { backgroundColor: '#313BAC' } : {}}
      />
      <div
        className="app__navigation-dot"
        onClick={() => setActiveDot('about')}
        style={activeDot === 'about' ? { backgroundColor: '#313BAC' } : {}}
      />
      <div
        className="app__navigation-dot"
        onClick={() => setActiveDot('projects')}
        style={activeDot === 'projects' ? { backgroundColor: '#313BAC' } : {}}
      />
      <div
        className="app__navigation-dot"
        onClick={() => setActiveDot('skills')}
        style={activeDot === 'skills' ? { backgroundColor: '#313BAC' } : {}}
      />
      <div
        className="app__navigation-dot"
        onClick={() => setActiveDot('testimonials')}
        style={activeDot === 'testimonials' ? { backgroundColor: '#313BAC' } : {}}
      />
      <div
        className="app__navigation-dot"
        onClick={() => setActiveDot('footer')}
        style={activeDot === 'footer' ? { backgroundColor: '#313BAC' } : {}}
      />
    </div>
  );
}

export default NavigationDots;
