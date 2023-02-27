import React, {useState} from 'react';
import Dropdown from './components/Dropdown';
import Navbar from './components/Navbar';
import GlobalStyle from './globalStyle';
import {BrowserRouter as Router} from 'react-router-dom';
import AnimateRoutes from './components/AnimateRoutes';
import ScrollToTop from './components/ScrollToTop';




function App(){
  const [isOpen, setIsOpen] = useState(false);
  
  const toggle = () => {
    setIsOpen(!isOpen);
  };


  return (
    <Router className="overflow-auto">
      <ScrollToTop />
    <GlobalStyle />
    <Navbar toggle={toggle} />
    <Dropdown isOpen={isOpen} toggle={toggle} />
    <AnimateRoutes />
    </Router>
    
  );
}

export default App;
