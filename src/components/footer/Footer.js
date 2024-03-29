import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { Button } from '../Button';
import {
  FaFacebook,
  FaInstagram,
  FaWhatsapp
} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';

function onEmailClick() {
  window.open(`mailto:${'imperiobrdominmicanrepublic@gmail.com'}`);
}

function Footer() {
  return (
    <div className='footer-container'>
     
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Nosotros</h2>
            <Link to='/inmueble'>Proyectos</Link>
            <Link to='/about'>Quiénes Somos</Link>
          </div>
          
          <div class='footer-link-items'>
            <h2>Contáctanos</h2>
            <Link to='/contactenos'>Contacto</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          
          <div class='footer-link-items'>
            <h2>Redes Sociales</h2>
            <Link to='https://instagram.com/reyconfer?igshid=Y2IzZGU1MTFhOQ=='>Instagram</Link>
            <Link to={'https://www.facebook.com/reyconferd'} target='_blank'>Facebook</Link>
            <Link to='/' onClick={onEmailClick}>Email</Link>
            <Link to={'https://api.whatsapp.com/send?phone=18294432380'} target='_blank'>WhatsApp</Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              <img src={require('../../images/Logo1.png')} height='190' width='100%'  alt='logo'/>
              <i class='fab fa-typo3' />
            </Link>
          </div>
          <small class='website-rights'>Reyconfer © 2023</small>
          <div class='social-icons'>
          <a
  className='social-icon-link'
  href='https://www.facebook.com/reyconferd'
  target='_blank'
  rel='noopener noreferrer'
  aria-label='Facebook'
>
<FaFacebook/>
</a>
            
            <Link
              class='social-icon-link'
              to={'https://instagram.com/reyconfer?igshid=Y2IzZGU1MTFhOQ=='}
              target='_blank'
              aria-label='Instagram'
            >
             <FaInstagram />
            </Link>
            <Link
              class='social-icon-link'
              to={'https://api.whatsapp.com/send?phone=18294432380'} 
              target='_blank'
              aria-label='Youtube'
            >
              <FaWhatsapp />
            </Link>
            <Link
              class='social-icon-link'
              to= '#'
              aria-label='Twitter'
            >
              <HiOutlineMail onClick={onEmailClick} />
            </Link>
            <Link
              class='social-icon-link'
              to={'/mailto:imperiobrdominicanrepublic@gmail.com'}
              
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;