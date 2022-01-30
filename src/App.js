import React from 'react';

import { About, Footer, Header, Skills, Testimonial, Work } from './container';
import { Navbar, Overlay } from './components';
import './App.scss';

function App() {
  return (
    <div className="app">
      <div style={{ position: 'relative' }}>
        <Overlay />
        <Navbar />
        <Header />
      </div>
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
