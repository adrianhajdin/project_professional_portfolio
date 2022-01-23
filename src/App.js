import React from 'react';

import Skills from './container/Skills/Skills';
import Footer from './container/Footer/Footer';
import About from './container/About/About';
import Testimonial from './container/Testimonial/Testimonial';
import './App.scss';

function App() {
  return (
    <div className="app">
      <About />
      <Skills />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
