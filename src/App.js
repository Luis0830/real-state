import React, {useState} from 'react';
import Dropdown from './components/Dropdown';
import Navbar from './components/Navbar';
import GlobalStyle from './globalStyle';
import {BrowserRouter as Router} from 'react-router-dom';
import AnimateRoutes from './components/AnimateRoutes';
import ScrollToTop from './components/ScrollToTop';
import { Helmet } from 'react-helmet';




function App(){
  const [isOpen, setIsOpen] = useState(false);
  
  const toggle = () => {
    setIsOpen(!isOpen);
  };


  return (
    <Router className="overflow-auto">
      <Helmet>
        <title>Reyconfer</title>
        <meta 
        name='description' 
        content='Imoviliaria Reyconfer, venta y alquiler de casas, apartamentos y proyectos en la Republica Dominicana'
        />
        <meta name='keywords' content='reyconfer, Reyconfer, venta y alquiler, Apartamentos rd, apartamento, casa, imobiliaria RD, ventas de hogar,inmobiliaria, casas rd'/>
      </Helmet>
      <ScrollToTop />
    <GlobalStyle />
    <Navbar toggle={toggle} />
    <Dropdown isOpen={isOpen} toggle={toggle} />
    <AnimateRoutes />
    </Router>
    
  );
}

export default App;
