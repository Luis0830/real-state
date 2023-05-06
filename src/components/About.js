import React from 'react'
import Footer from './footer/Footer'
import { NavTwo } from './Navbar'
import { Link } from 'react-router-dom';
import houseImage from '../images/casita.jpg';
import { Helmet } from 'react-helmet';

function About() {
  return (
    <>
    <Helmet>
    <title>Sobre nosotros - Somos expertos en bienes raíces en República Dominicana</title>
<meta name="description" content="Somos una empresa dedicada a la venta de bienes raíces en República Dominicana. Nuestro objetivo es ayudarte a encontrar la propiedad ideal para ti. Contáctanos hoy para obtener más información." />
<meta name="keywords" content="bienes raíces, venta, apartamentos, reyconfer, República Dominicana, equipo, expertos" />
    </Helmet>
    <NavTwo />
    <section className="bg-blugray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 mid:grid-cols-2 gap-8 items-center">
          <div className=' text-justify sm:text-center'>
            <h2 className="text-4xl font-bold border-white text-textgrey mb-4 ">Bienvenidos a Reyconfer, nuestro sitio web de bienes raíces</h2>
            <p className="text-lg text-gray-700 mb-8 text-left sm:text-center">Somos un equipo de agentes experimentados que estamos apasionados por ayudar a nuestros clientes a encontrar la propiedad perfecta.</p>
            <ul className="list-disc list-inside mb-8 text-left sm:text-center">
              <li className="text-lg ">Servicio personalizado y atención al detalle</li>
              <li className="text-lg ">Conocimiento extenso del mercado local de bienes raíces</li>
              <li className="text-lg ">Fortaleza en habilidades de negociación para ayudarte a obtener la mejor oferta</li>
              <li className="text-lg text-gray-700 mb-4">Acceso a una amplia red de profesionales de la industria</li>
            </ul>
            <Link to="/contactenos" className="bg-gradient-to-br text-white bg-d-blue px-7 py-3  border-solid border-0 outline-hoveline text-[16px] w-[60%] no-underline sm:w-[70%] rounded-[23px] bg-green-500 hover:bg-green-600 text-white font-bold rounded">
              Contáctanos
              {/* <FontAwesomeIcon icon={faChevronRight} className="ml-2" /> */}
            </Link>
          </div>
          <div className='rounded rounded-[100%] bg-gradient-to-br'>
            <img src={houseImage} alt="Casa de bienes raíces" className="w-full h-auto rounded rounded-[100%] shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]" />
          </div>
        </div>
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-textgrey mb-4 sm:text-center">¿Por qué elegirnos?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 mid:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br text-textgrey from-white to-d-d-blue p-6 rounded-[35px] shadow-md">
              <h4 className="text-xl font-bold text-textgrey mb-2">Experiencia</h4>
              <p className="text-gray-700">Con años de experiencia en el mercado inmobiliario, podemos ayudarte a encontrar la propiedad adecuada para tus necesidades y presupuesto.</p>
            </div>
            <div className="bg-gradient-to-br text-textgray from-white to-d-d-blue p-6 rounded-[35px] shadow-lg">
              <h4 className="text-xl font-bold text-black  mb-2">Servicio al cliente</h4>
              <p className="text-gray-700">Nuestro enfoque personalizado significa que te escuchamos y te brindamos la atención que mereces en todo momento.</p>
            </div>
            <div className="bg-gradient-to-br text-textgray from-white to-d-navi p-6 rounded-[35px] shadow-md">
              <h4 className="text-xl font-bold text-textgray mb-2">Red de profesionales</h4>
              <p className="text-gray-700">Nuestra red de profesionales incluye abogados, tasadores, y otros expertos que pueden ayudarte en cada paso del proceso de compra o venta de una propiedad.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Footer />
    </>

  )
}

export default About