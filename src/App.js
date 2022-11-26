import React from 'react';
import About from './Assets/About';
import Home from './Assets/Home';
import Midhome from './Assets/Midhome';
import What from './Assets/What';

const App = () => {
  return (
    <div className="bg-slate-300">
      <Home/>
      <Midhome/>
      <About/>
      <What/>
    </div>
  )
}

export default App;