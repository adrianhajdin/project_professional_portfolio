import React from 'react';

import Skills from './container/Skills/Skills';
import Footer from './container/Footer/Footer';
import About from './container/About/About';
import './App.scss';

function App() {
  return (
    <div className="app">
      <About />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
