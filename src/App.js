import React from 'react';

import Skills from './container/Skills/Skills';
import Footer from './container/Footer/Footer';
import About from './container/About/About';
import Testimonial from './container/Testimonial/Testimonial';
import './App.scss';
import Work from './container/Work/Work';

function App() {
  return (
    <div className="app">
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
