import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import SingleSlider from './SingleSlider/SingleSlider';
import ImgCarrusel from './SingleSlider/ImgCarrusel';
import { GoLocation, GoMail } from 'react-icons/go';
import { FaWhatsapp, FaToilet, FaBed, FaCircle } from 'react-icons/fa';
import { NavTwo } from './Navbar';
import { motion } from 'framer-motion';
import { animationTwo, transition } from './Animations/Animations'
import sanityClient from "../lib/client";
import imageUrlBuilder from "@sanity/image-url";
import { BsArrowsFullscreen, BsBox } from "react-icons/bs";
import Footer from './footer/Footer';
import ContactBox from './contact/ContactBox';
import {IoMdArrowRoundBack} from "react-icons/io";


function SingleProduct({ product }) {

  console.log(product.img2);
  console.log(product.mainImage);


  const builder = imageUrlBuilder(sanityClient);

  function urlFor(source) {
    return builder.image(source);
  }

  const images = [
    {
      url: (product.img1 !== null ? urlFor(product.img1).url() : null)
    },
    {
      url: (product.img2 !== null ? urlFor(product.img2).url() : null)
    },
    {
      url: (product.img3 !== null ? urlFor(product.img3).url() : null)
    },
    {
      url: (product.img4 !== null ? urlFor(product.img4).url() : null)
    },
    {
      url: (product.img5 !== null ? urlFor(product.img5).url() : null)
    },
    {
      url: (product.img6 !== null ? urlFor(product.img6).url() : null)
    },
    {
      url: (product.img7 !== null ? urlFor(product.img7).url() : null)
    },
    {
      url: (product.img8 !== null ? urlFor(product.img8).url() : null)
    },
    {
      url: (product.img9 !== null ? urlFor(product.img9).url() : null)
    },
    {
      url: (product.img10 !== null ? urlFor(product.img10).url() : null)
    }
  ].filter(image => image.url !== null);
  console.log(images);

  
    function handleClick() {
      window.location.reload();
    }
 

  return (
    <motion.div
      initial="out"
      animate="in"
      exit="out"
      variants={animationTwo}
      transition={transition}
    >
      <NavTwo />
      <>
        <section className='flex flex-col '>
          <div onClick={handleClick} className='mt-10 cursor-pointer '>
            <h1><IoMdArrowRoundBack /> Atras</h1>
          </div>
          <div className='w-full'>
            <ImgCarrusel  slides={images} /> 
            {/* <SingleSlider image={product.images.url} /> */}
          </div>        
          <container className="flex   mt-5  p-10">
            <div className='w-[50%] '>
            <div className='space-y-2 mb-2 text-[20px]'>
              <p><FaCircle className='text-green mr-1'/>{product.status}</p> 
              <h1>{product.title}</h1>
              <p className='font-bold text-textgrey'>{product.price}</p>
            </div>
            <div className='flex mb-2'>
              <div  className='content-start text-left place-content-start justify-items-start items-start space-y-4 mr-10 text-[18px]'>
                <p><FaBed className='mr-1 text-[25px]'/>{product.beds} Habitaciones</p>
                <p><FaToilet className='mr-1 text-[25px]'/>{product.bath} Baños</p>
                <p><GoLocation className='mr-1 text-[25px]'/>{product.location}</p>
              </div>
              <div>
                <p> <BsBox className='mr-1 text-[25px]'/>{product.mts}</p>
                <div>iconos</div>
              </div>
            </div>
            <p className='mb-2'>{product.details}</p>
            <button>Contactanos</button>
            </div>
            <div className='flex w-50% h-screen shadow-xl'>
              <div className='rounded-[25px]' >
              <ContactBox />
              </div>
            </div>
          </container>
        </section>
      </>
      <Footer />
    </motion.div>
  )

}

export default SingleProduct;