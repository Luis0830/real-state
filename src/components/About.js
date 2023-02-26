import React from 'react'
import Footer from './footer/Footer'
import { NavTwo } from './Navbar'
import { Link } from 'react-router-dom';
import houseImage from '../images/Logo1.png';

function About() {
  return (
    <>
    <NavTwo />
    <section className="bg-gradient-to-br from-navi to-d-red">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 mid:grid-cols-2 gap-8 items-center">
          <div className='text-bggrey text-justify sm:text-center'>
            <h2 className="text-4xl font-bold border-white text-textarea mb-4 ">Bienvenidos a Reyconfer, nuestro sitio web de bienes raíces</h2>
            <p className="text-lg text-gray-700 mb-8">Somos un equipo de agentes experimentados que estamos apasionados por ayudar a nuestros clientes a encontrar la propiedad perfecta.</p>
            <ul className="list-disc list-inside mb-8 text-justify sm:text-center">
              <li className="text-lg text-gray-700 mb-4">Servicio personalizado y atención al detalle</li>
              <li className="text-lg text-gray-700 mb-4">Conocimiento extenso del mercado local de bienes raíces</li>
              <li className="text-lg text-gray-700 mb-4">Fortaleza en habilidades de negociación para ayudarte a obtener la mejor oferta</li>
              <li className="text-lg text-gray-700 mb-4">Acceso a una amplia red de profesionales de la industria</li>
            </ul>
            <Link to="/contactenos" className="bg-gradient-to-br text-white from-navi to-d-white border-solid border-textarea border-[2px] outline-hoveline text-[18px] p-5 w-[50%] no-underline sm:w-[70%] rounded-[23px] bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
              Contáctanos
              {/* <FontAwesomeIcon icon={faChevronRight} className="ml-2" /> */}
            </Link>
          </div>
          <div className='rounded rounded-[50%] bg-gradient-to-br from-navi to-d-blue'>
            <img src={houseImage} alt="Casa de bienes raíces" className="w-full h-auto rounded rounded-[50%] shadow-md" />
          </div>
        </div>
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-textarea mb-4 sm:text-center">¿Por qué elegirnos?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 mid:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br text-white from-navi to-d-white p-6 rounded-[35px] shadow-md">
              <h4 className="text-xl font-bold text-hoveline mb-2">Experiencia</h4>
              <p className="text-gray-700">Con años de experiencia en el mercado inmobiliario, podemos ayudarte a encontrar la propiedad adecuada para tus necesidades y presupuesto.</p>
            </div>
            <div className="bg-gradient-to-br text-white from-navi to-d-white p-6 rounded-[35px] shadow-lg">
              <h4 className="text-xl font-bold text-hoveline  mb-2">Servicio al cliente</h4>
              <p className="text-gray-700">Nuestro enfoque personalizado significa que te escuchamos y te brindamos la atención que mereces en todo momento.</p>
            </div>
            <div className="bg-gradient-to-br text-white from-navi to-d-white p-6 rounded-[35px] shadow-md">
              <h4 className="text-xl font-bold text-hoveline mb-2">Red de profesionales</h4>
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