import React, { useRef } from 'react'
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';
import {NavTwo} from '../Navbar';
import {animationThree} from '../Animations/Animations'
import {BsWhatsapp, BsInstagram} from 'react-icons/bs';
import {FaPhone} from 'react-icons/fa';
import { GoMail } from "react-icons/go";


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
    <motion.div initial='out' animate='in' exit='out' variants={animationThree} className='h-screen bg-navi '>
    
    <section className='flex items-center justify-center content-center mx-2'>
    
    <div className='flex-cols mx-[5%] w-[50%] h-full items-center justify-center content-center  text-center'>
    <div className='p-10 mid:p-5  border-solid border-lineblue bg-lineblue rounded-[15px] border-2 m-3 max-w-xs'>
      <BsWhatsapp className='mt-5 mb-3 text-[30px] text-navi'/>
      <div className='mt-5 text-[12px]'>
      <h2>Escríbenos</h2>
      </div>
      </div>
    <div className='p-10  border-solid border-lineblue bg-lineblue rounded-[15px] overflow-hidden border-2 m-3 max-w-xs'>
      <GoMail className='text-[40px] text-navi'/>
      <div className='flex m-10 mb-5 flex-col '>
      <div className='space-y-2 text-[14px] font-[600]'>
      <p>the_luiscar-gmail.com</p>
      <p>fulano gmail.com</p>
      <p>azure.jesus.com</p>
      </div>;
      </div>
      </div>
    <div className='border-solid  rounded-[15px] border-lineblue bg-lineblue border-2 m-3 max-w-xs'>
      <FaPhone className='mt-5 mb-3 text-[30px] text-navi'/>
      <div className='mb-5'>
      <p>1-809-999-9999</p>
      <p>1-809-999-9999</p>
      <p>1-809-999-9999</p>
      </div>
      </div>
    </div>
    <div className=' mr-[25%] h-screen w-[50%] flex items-center justify-center content-center'>
      <form ref={form} onSubmit={sendEmail} className='space-y-3  w-[100%] gap-5 flex-col content-center items-center justify-center'>
      <h2 className='text-white -mt-20'>Escríbenos</h2>
        <input type="text" name='name' placeholder='Escribe tu nombre' className='w-[100%] p-3 border-solid placeholder-navi bg-textarea border-[2px] border-lineblue rounded-[15px] outline-hoveline text-[15px] focus:ring-hoveline focus:border-navi block' required/>
        <input type="email" name='email' placeholder='Escribe tu correo electronico' className=' p-3 w-[100%] placeholder-navi bg-textarea  border-lineblue border-solid border-[2px] outline-hoveline text-[15px] rounded-[15px]' required/>
        <textarea name="message" rows="7" placeholder='Escribe tu mensaje' className='w-full p-3 border-solid placeholder-navi bg-textarea border-lineblue border-[2px] m-2 w-[100%] outline-hoveline text-[15px] rounded-[15px]' required></textarea>
        <button type='submit' className='btn btn-primary bg-naviblue text-white font-bold text-[14px] rounded-[15px] placeholder-navi border-solid border-lineblue border-[2px] outline-hoveline text-[15px] p-3 w-[30%]'>Enviar Mensaje</button>
      </form>
      </div>
  
    </section>
      </motion.div>
    </>
  )
}

export default Contact