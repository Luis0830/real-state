import React from 'react'
import {Routes, Route, useLocation} from 'react-router-dom';
import Hero from './Hero';
import SingleProduct from './SingleProduct';
import { InfoData, InfoData2 } from '../data/InfoData';
import {SliderData} from '../data/SliderData'
import Imuebles from './Imuebles';
import InfoSection from './InfoSection'
import { AnimatePresence } from 'framer-motion';
import Contact from './contact/Contact';


function AnimateRoutes() {
    const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
    <Routes location={location} key={location.pathname}>
         <Route path='/' element={<> <Hero slides={SliderData} />  <InfoSection /></>}>
    
     </Route>
      <Route path='/inmueble' element={<Imuebles/>} />
      <Route path={'/inmueble/:id'} element={<SingleProduct/>} />
      <Route path='/contactenos'  element={<Contact />}/>
    </Routes>
    </AnimatePresence>
  )
}

export default AnimateRoutes