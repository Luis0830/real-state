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
    <form ref={form} onSubmit={sendEmail}>
        <input type="text" name='name' placeholder='Your Name' required/>
        <input type="email" name='email' placeholder='Your Email' required/>
        <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
        <button type='submit' className='btn btn-primary'>Send Message</button>

      </form>
      </motion.div>
  )
}

export default Contact