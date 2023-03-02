import React from 'react'
import {Routes, Route, useLocation} from 'react-router-dom';
import Hero from './Hero';
import SingleProduct from './SingleProduct';
import {SliderData} from '../data/SliderData'
import Imuebles from './Imuebles';
import InfoSection from './InfoSection'
import { AnimatePresence } from 'framer-motion';
import Contact from './contact/Contact';
import About from './About';
import { Helmet } from 'react-helmet';


function AnimateRoutes() {
    const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
    <Routes location={location} key={location.pathname}>
         <Route path='/' element={<> <Helmet>
        <title>
          Casas en venta en República Dominicana - Encuentra tu hogar ideal
        </title>
        <meta
          name="description"
          content="Encuentra la casa de tus sueños en República Dominicana. Ofrecemos una amplia selección de casas en venta en diferentes áreas del pais. Contáctanos hoy."
        />
        <meta
          name="keywords"
          content="casas, compra, venta, apartamentos, alquiler, RD, República Dominicana, hogar, vivienda"
        />
      </Helmet> <Hero slides={SliderData} />  <InfoSection /></>}>
    
     </Route>
      <Route path='/inmueble' element={<Imuebles/>} />
      <Route path={'/inmueble/:id'} element={<SingleProduct/>} />
      <Route path='/contactenos'  element={<Contact />}/>
      <Route path='/about'  element={<About />}/>
    </Routes>
    </AnimatePresence>
  )
}

export default AnimateRoutes