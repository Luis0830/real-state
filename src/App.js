import React, {useState} from 'react';
import Dropdown from './components/Dropdown';
import Footer from './components/footer/Footer';

import Navbar from './components/Navbar';

import GlobalStyle from './globalStyle';
import {BrowserRouter as Router} from 'react-router-dom';

import AnimateRoutes from './components/AnimateRoutes';




function App(){
  const [isOpen, setIsOpen] = useState(false);
  
  const toggle = () => {
    setIsOpen(!isOpen);
  };


  return (
    <Router className="overflow-auto">
    <GlobalStyle />
    <Navbar toggle={toggle} />
    <Dropdown isOpen={isOpen} toggle={toggle} />
    <AnimateRoutes />
    </Router>
    
  );
}

export default App;
