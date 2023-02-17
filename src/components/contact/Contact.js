import React from 'react'
import { useRef } from 'react';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';
import {NavTwo} from '../Navbar';
import {animationThree} from '../Animations/Animations'
import {BsWhatsapp, BsInstagram} from 'react-icons/bs';
import {FaPhone} from 'react-icons/fa';


function Contact() {
  const form = useRef();
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_czm1h0h', 'template_qtbg57p', form.current, '7vaZf9UCMKKzMcjNa')
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
    <motion.div initial='out' animate='in' exit='out' variants={animationThree} className='h-screen'>
    
    <section className='flex items-center justify-center content-center'>
    
    <div className='flex-col w-[50%] h-full items-center justify-center content-center mx-3 text-center'>
    <div className='p-20 border-solid rounded-[15px] border-2 m-3 max-w-xs'>
      <BsWhatsapp />
      </div>
    <div className='p-20 border-solid rounded-[15px] border-2 m-3'>
      <BsInstagram />
      </div>
    <div className='p-20 border-solid rounded-[15px] border-2 m-3'>
      <FaPhone />
      <p>1-809-999-9999</p>
      <p>1-809-999-9999</p>
      <p>1-809-999-9999</p>
      </div>
    </div>
    <div className='w-[100%] h-screen flex items-center justify-center content-center'>
      <form ref={form} onSubmit={sendEmail} className='flex-col content-center items-center justify-center'>
        <input type="text" name='name' placeholder='Escribe tu nombre' className='w-full p-2 m-2 rounded-[15px]' required/>
        <input type="email" name='email' placeholder='Escribe tu correo electronico' className='w-full p-2 m-2 rounded-[15px]' required/>
        <textarea name="message" rows="7" placeholder='Escribe tu mensaje' className='w-full p-2  m-2 rounded-[15px]' required></textarea>
        <button type='submit' className='btn btn-primary p-2'>Enviar Mensaje</button>
      </form>
      </div>
  
    </section>
      </motion.div>
    </>
  )
}

export default Contact