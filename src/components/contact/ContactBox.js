import React, { useRef } from 'react'
import emailjs from 'emailjs-com';

export default function ContactBox() {

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
    <div className=' md:mr-[25%] sm:mr-0 h-screen w-[50%] sm:h-[60%] sm:mt-[30%] sm:w-full sm:mr-0  flex items-center justify-center content-center'>
      <form ref={form} onSubmit={sendEmail} className='space-y-3  w-[100%] gap-5 flex-col content-center items-center justify-center'>
      <div className='sm:flex sm:content-center sm:items-center sm:justify-center'><h2 className='text-white -mt-20'>Escríbenos</h2></div>
         <p>Mas informacion sobre esta propiedad</p>
        <input type="text" name='name' placeholder='Escribe tu nombre' className='w-[100%] p-3 border-solid placeholder-navi bg-textarea border-[2px] border-lineblue rounded-[15px] outline-hoveline text-[15px] focus:ring-hoveline focus:border-navi block' required/>
        <input type="email" name='email' placeholder='Escribe tu correo electronico' className=' p-3 w-[100%] placeholder-navi bg-textarea  border-lineblue border-solid border-[2px] outline-hoveline text-[15px] rounded-[15px]' required/>
        <textarea name="message" rows="7" placeholder='Escribe tu mensaje' className='w-full p-3 border-solid placeholder-navi bg-textarea border-lineblue border-[2px] m-2 sm:m-0 w-[100%] outline-hoveline text-[15px] rounded-[15px]' required></textarea>
        <div className='sm:flex sm:content-center sm:items-center sm:justify-center'><button type='submit' className='btn btn-primary bg-naviblue text-white font-bold text-[14px] rounded-[15px] placeholder-navi border-solid border-lineblue border-[2px] outline-hoveline text-[15px] p-3 w-[30%] sm:w-[70%]'>Enviar Mensaje</button></div>
      </form>
      </div>
    </>
  )
}
