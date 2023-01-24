import React from 'react'
import { useRef } from 'react';
import emailjs from 'emailjs-com';
import './contact.css';
import { motion } from 'framer-motion';
import {animationThree} from '../Animations/Animations'

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
    <motion.div initial='out' animate='in' exit='out' variants={animationThree}>
    <div>Contact</div>
    <div id="contact">
      <div className="contact_title">
      <h5>Get in Touch</h5>
      <h2>Contact me</h2>
      </div>
      <div className="container contact__container">
      <div className="contact__options">
        <article className='contact__option'>
{/*<HiOutlineMail className='contact-icon' />*/}
          <h4>Email</h4>
          <h5>luiscarlosgarcia0830@gmail.com</h5>
          <a href="mailto:luiscarlosgarcia0830@gmail.com" target="_blank">Send a message</a>
        </article>
        <article className='contact__option'>
          {/*<SiWhatsapp className='contact-icon' />*/}
          <h4>Whatsapp</h4>
          <a href="https://api.whatsapp.com/send?phone=18099316145" target="_blank">Send a message</a>
        </article>
        <article className='contact__option'>
          {/*<FiPhone className='contact-icon'/>*/}
          <h4>Phone</h4>
          <h5>+1-809-931-6145</h5>
        </article>
      </div>
      </div>
      </div>
    {/*from below*/}
    <form ref={form} onSubmit={sendEmail}>
        <input type="text" name='name' placeholder='Nombre' required/>
        <input type="email" name='email' placeholder='Correo Electronico' required/>
        <textarea name="message" rows="7" placeholder='Tu mensaje' required></textarea>
        <button type='submit' className='btn btn-primary'>Enviar</button>

      </form>
      </motion.div>
  )
}

export default Contact