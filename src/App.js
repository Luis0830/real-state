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
      <title>Reyconfer - Venta de Propiedades en República Dominicana</title>
        <meta name="description" content="Reyconfer es una empresa dedicada a la venta de propiedades en República Dominicana. Encuentra tu hogar ideal en nuestra selección de casas y apartamentos en diferentes áreas de la ciudad y el pais. Contáctanos hoy." />
        <meta name="keywords" content="Reyconfer, propiedades, venta, casas, apartamentos, hogar, República Dominicana" />
        <link rel="canonical" href="https://www.reyconfer.com/" />    
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
