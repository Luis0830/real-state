import React, { useRef } from 'react'
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';
import {NavTwo} from '../Navbar';
import {animationThree} from '../Animations/Animations'
import {BsWhatsapp} from 'react-icons/bs';
import {FaPhone} from 'react-icons/fa';
import { GoMail } from "react-icons/go";
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';


function Contact() {
  const form = useRef();
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_czm1h0h', 'template_72jebej', form.current, '7vaZf9UCMKKzMcjNa')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
    };

    

  return (
    <>
    <NavTwo />
    <motion.div initial='out' animate='in' exit='out' variants={animationThree} className='h-screen sm:h-full bg-gradient-to-br from-navi via-d-blue to-d-red '>
    <Helmet>
                <title>Proyectos</title>
                <meta name="description" content="Contactanos para informacion, contizaciones, Detalles " />
            </Helmet>
    <section className='flex sm:flex-col items-center justify-center content-center mx-2'>
    
    <div className='flex-cols sm:mt-5 sm:order-last md:mx-[5%] md:w-[50%] sm:w-[100%]  h-full items-center justify-center content-center  text-center'>
    <div className='p-10 sm:p-2 border-solid border-lineblue bg-lineblue rounded-[15px] border-2 m-3 sm:ml-6 max-w-xs'>
      <BsWhatsapp className='mt-5 mb-3 text-[30px] text-navi'/>
      <div className='mt-5 text-[12px]'>
      <h2>Escríbenos</h2>
      <Link to={'https://api.whatsapp.com/send?phone=18294432380'} target='_blank' className=' no-underline cursor-pointer'><p>Aderson Contreras</p></Link>
      <Link to={'https://api.whatsapp.com/send?phone=34676472703'} target='_blank' className=' no-underline cursor-pointer'><p>Ana Reyes</p></Link>
      </div>
      </div>
    <div className='sm:flex-col p-10 sm:m-0 sm:p-0 sm:ml-6 bg-lineblue backdrop-filter bg-opacity-50 rounded-[15px] overflow-hidden border-2 m-3  max-w-xs'>
      <GoMail className='text-[40px] sm:-mb-[40px] sm:mt-5 text-navi'/>
      <div className='flex  mb-5 sm:m-0 sm:mt-8 sm:mb-0 flex-col '>
      <div className='space-y-2 sm:space-y-1  font-[600]'>
      <p className='text-[12px]'>imperiobrdominicanrepublic@gmail.com</p>
      </div>;
      </div>
      </div>
    <div className='border-solid  rounded-[15px] sm:ml-6 border-lineblue bg-lineblue border-2 m-3 max-w-xs'>
      <FaPhone className='mt-5 sm:mt-3 mb-3 sm:mb-1 text-[30px] text-navi'/>
      <div className='mb-5 sm:mb-1'>
      <p>1-829-443-2380</p>
      <p>+34 676 47 27 03</p>
      </div>
      </div>
    </div>
    <div className=' md:mr-[25%] sm:mr-0 h-screen w-[50%] sm:h-[60%] sm:mt-[30%] sm:w-full sm:mr-0  flex items-center justify-center content-center'>
      <form ref={form} onSubmit={sendEmail} className='space-y-3  w-[100%] gap-5 flex-col content-center items-center justify-center'>
      <div className='sm:flex sm:content-center sm:items-center sm:justify-center'><h2 className='text-white -mt-20'>Escríbenos</h2></div>
        <input type="text" name='name' placeholder='Escribe tu nombre' className='w-[100%] p-3 bg-opacity-60  border-solid placeholder-navi bg-textarea border-[2px] border-lineblue rounded-[15px] outline-hoveline text-[15px] focus:ring-hoveline focus:border-navi block' required/>
        <input type="email" name='email' placeholder='Escribe tu correo electronico' className=' p-3 bg-opacity-60  w-[100%] placeholder-navi bg-textarea  border-lineblue border-solid border-[2px] outline-hoveline text-[15px] rounded-[15px]' required/>
        <textarea name="message" rows="7" placeholder='Escribe tu mensaje' className='w-full p-3 border-solid bg-opacity-60 placeholder-navi bg-textarea border-lineblue border-[2px] m-2 sm:m-0 w-[100%] outline-hoveline text-[15px] rounded-[15px]' required></textarea>
        <div className='sm:flex sm:content-center sm:items-center sm:justify-center'><button type='submit' className='btn btn-primary bg-naviblue text-white font-bold text-[14px] rounded-[15px] placeholder-navi border-solid border-lineblue border-[2px] outline-hoveline text-[15px] p-3 w-[30%] sm:w-[70%]'>Enviar Mensaje</button></div>
      </form>
      </div>
  
    </section>
      </motion.div>
    </>
  )
}

export default Contact