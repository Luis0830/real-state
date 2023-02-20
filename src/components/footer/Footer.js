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
            <Link to='/sign-up'>How it works</Link>
            <Link to='/'>Testimonials</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Investors</Link>
            <Link to='/'>Terms of Service</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contáctanos</h2>
            <Link to='/'>Contact</Link>
            <Link to='/'>Support</Link>
            <Link to='/'>Destinations</Link>
            <Link to='/'>Sponsorships</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/'>Instagram</Link>
            <Link to={'.//www.facebook.com/people/Negocios-Inmobiliarios-Reyconfer/100058326134976'}>Facebook</Link>
            <Link to='/' onClick={onEmailClick}>Email</Link>
            <Link to={'.//api.whatsapp.com/send?phone=18294432380'} target='_blank'>WhatsApp</Link>
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
            <Link
              class='social-icon-link'
              to= {'.//www.facebook.com/people/Negocios-Inmobiliarios-Reyconfer/100058326134976'}
              target='_blank'
              aria-label='Facebook'
            >
              <FaFacebook/>
            </Link>
            <Link
              class='social-icon-link'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
             <FaInstagram />
            </Link>
            <Link
              class='social-icon-link'
              to={'.//api.whatsapp.com/send?phone=18294432380'}
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