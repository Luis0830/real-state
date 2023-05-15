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
    <motion.div initial='out' animate='in' exit='out' variants={animationThree} className='h-screen sm:h-full bg-blugray '>
    <Helmet>
                <title>Proyectos</title>
                <meta name="description" content="Contactanos para informacion, contizaciones, Detalles " />
            </Helmet>
    <section className='flex sm:flex-col items-center justify-center content-center mx-2'>
    
    <div className='flex-cols sm:mt-5 sm:order-last md:mx-[5%] md:w-[50%] sm:w-[100%]  h-full items-center justify-center content-center  text-center'>
    <div className='p-10 sm:p-2   shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px]  bg-white rounded-[15px]  m-3 sm:ml-6 max-w-xs'>
      <BsWhatsapp className='mt-5 mb-[-2] text-[30px] text-navi'/>
      <div className='mt-5 text-[12px]'>
      <h2 className='mb-[3px] text-textgray'>WhatsApp</h2>
      <Link to={'https://api.whatsapp.com/send?phone=18294432380'} target='_blank' className=' no-underline cursor-pointer'><p className='text-[16px] mb-1 text-naviblue'>Aderson Contreras</p></Link>
      <Link to={'https://api.whatsapp.com/send?phone=34676472703'} target='_blank' className=' no-underline cursor-pointer'><p className='text-[16px] text-naviblue'>Ana Reyes</p></Link>
      </div>
      </div>
    <div className='sm:flex-col p-10 sm:m-0 sm:p-5 sm:ml-6  shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] bg-white  rounded-[15px] overflow-hidden border-2 m-3  max-w-xs'>
      <GoMail className='text-[40px] sm:-mb-[40px] sm:mt-5 text-navi'/>
      <div className='flex  mb-5 sm:m-0 sm:mt-8 sm:mb-0 flex-col '>
      <h2 className='mb-[6px] text-[20px] text-textgray'>Email</h2>
      <div className='space-y-2 sm:space-y-1  font-[600]'>
      <Link to={'mailto:imperiobrdominicanrepublic@gmail.com'} className=' no-underline cursor-pointer'><p className='text-[13px] text-black text-naviblue'>imperiobrdominicanrepublic@gmail.com</p></Link>
      </div>
      </div>
      </div>
    <div className=' rounded-[15px] p-5 sm:ml-6 border-lineblue bg-white  shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px]  m-3 max-w-xs'>
      <FaPhone className='mt-5 sm:mt-3 mb-3 sm:mb-1 text-[30px] text-navi'/>
      <div className='mb-5 sm:mb-1'>
      <h2 className='mb-[6px] text-[20px] text-textgray'>Contactos</h2>
      <p className='text-naviblue'>1-829-443-2380</p>
      <p className='text-naviblue'>+34 676 47 27 03</p>
      </div>
      </div>
    </div>
    <div className=' md:mr-[25%] sm:mr-0 h-screen w-[50%] sm:h-[60%] sm:mt-[30%] sm:w-full sm:mr-0  flex items-center justify-center content-center'>
      <form ref={form} onSubmit={sendEmail} className='space-y-3  w-[100%] gap-5 flex-col content-center items-center justify-center'>
      <div className='sm:flex sm:content-center sm:items-center sm:justify-center'><h2 className=' -mt-20 text-textgray'>Escríbenos</h2></div>
        <input type="text" name='name' placeholder='Escribe tu nombre' className='w-[100%] p-3 bg-opacity-[5%]  border-solid placeholder-navi bg-textarea border-[1px] border-inputline rounded-[15px] outline-inputhover text-[15px] focus:ring-hoveline focus:border-inputhover focus:bg-white block' required/>
        <input type="email" name='email' placeholder='Escribe tu correo electronico' className=' p-3 bg-opacity-[5%]  w-[100%] placeholder-navi bg-textarea  border-inputline border-solid border-[1px] outline-inputhover text-[15px] rounded-[15px] focus:bg-white' required/>
        <textarea name="message" rows="7" placeholder='Escribe tu mensaje' className='w-full p-3 border-solid bg-opacity-[5%] placeholder-navi bg-textarea border-inputline border-[1px]  sm:m-0 w-[100%] outline-inputhover text-[15px] rounded-[15px] focus:bg-white' required></textarea>
        <div className='sm:flex sm:content-center sm:items-center sm:justify-center'><button type='submit' className='bg-d-blue border-0 no-underline py-3 px-5 rounded-[18px] font-jaldi border-1 rounded-l-md text-[white] text-poppins cursor-pointer text-[15px] hover:bg-naviblue hover:text-bluegray'>Enviar Mensaje</button></div>
      </form>
      </div>
  
    </section>
      </motion.div>
    </>
  )
}

export default Contact