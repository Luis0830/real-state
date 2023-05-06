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
      <div className='shadow-xl p-[10%] w-[100%]  sm:mt-[30%] sm:w-full sm:mr-0  flex items-center justify-center content-center rounded-[20px]'>
        <form ref={form} onSubmit={sendEmail} className='space-y-3  w-[100%] gap-5 flex-col content-center items-center justify-center'>
          <div className='sm:flex sm:content-center sm:items-center sm:justify-center'><h2 className='text-white -mt-20'>Escríbenos</h2></div>
          <h2 className='text-[17px] text-textgray '>Mas informacion sobre esta propiedad?</h2>
          <input type="text" name='name' placeholder='Escribe tu nombre' className='w-[100%] p-3 border-solid placeholder-navi bg-blugray border-[1px] border-textgray rounded-[15px] outline-d-blue text-[15px] focus:ring-hoveline focus:border-navi block' required />
          <input type="email" name='email' placeholder='Escribe tu correo electronico' className=' p-3 w-[100%] placeholder-navi bg-blugray  border-textgray border-solid border-[1px] outline-d-blue text-[15px] rounded-[15px]' required />
          <textarea name="message" rows="7" placeholder='Escribe tu mensaje' className='w-full p-3 border-solid placeholder-navi bg-blugray border-textgray border-[1px] sm:m-0 w-[100%] outline-d-blue text-[15px] rounded-[15px]' required></textarea>
          <div className='sm:flex sm:content-center sm:items-center sm:justify-center'><button type='submit' className='btn btn-primary bg-d-blue text-white font-bold text-[14px] rounded-[15px] placeholder-navi border-0 outline-hoveline text-[15px] p-3 w-[100%] sm:w-[70%]'>Enviar Mensaje</button></div>
        </form>
      </div>
    </>
  )
}
