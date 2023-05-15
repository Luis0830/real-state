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
import { Link } from 'react-router-dom';


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
          <div   className='mt-3 ml-[48%] sm:ml-[35%]'>
            <button onClick={handleClick} className='bg-bluenavi shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] border-0 py-3 px-15  w-[25%] sm:w-[50%] rounded-[25px]  cursor-pointer'><h1><IoMdArrowRoundBack /> Atras</h1></button>
          </div>
          <div className='w-full'>
            <ImgCarrusel  slides={images} /> 
            {/* <SingleSlider image={product.images.url} /> */}
          </div>        
          <container className="flex sm:flex-col mt-5 sm:mt-1 p-10">
            <div className='w-[50%] sm:w-[100%] ml-[12%] sm:ml-0 sm:m-2'>
            <div className='space-y-2 mb-2 text-[20px]'>
              <div className='flex'><p><FaCircle className='text-green mr-1'/>{product.status}</p> <h3 className='ml-10'>{product.project}</h3></div>
              <h1 className='sm:text-center '>{product.title}</h1>
              <p className='font-bold text-textgrey'>{product.price}</p>
            </div>
            <div className='flex mb-2'>
              <div  className='content-start text-left place-content-start justify-items-start items-start space-y-4 mr-10 text-[18px]'>
                <p><FaBed className='mr-1 text-d-blue text-[25px]'/>{product.beds} Habitaciones</p>
                <p><FaToilet className='mr-1  text-d-blue text-[25px]'/>{product.bath} Baños</p>
                <p><GoLocation className=' text-d-blue mr-1 text-[25px]'/>{product.location}</p>
              </div>
              <div>
                <p> <BsBox className='mr-1 text-d-blue text-[25px]'/>{product.mts}</p>
                
              </div>
            </div>
            <div className='w-[60%] sm:w-[100%]'><p className='mb-2 text-textgrey text-justify sm:text-center text-[13px] sm:text-[15px]'>{product.details}</p></div>
            <button className="bg-d-blue border-0 mt-5 no-underline py-3 px-20 rounded-[18px] font-jaldi border-1 rounded-l-md text-[white] text-poppins text-[14px] sm:w-full">
                        <Link
                          to="/contactenos"
                          className="no-underline text-[15px] text-white"
                        >
                          Contacto
                        </Link>
                      </button>
            </div>
            <div className='flex rounded-[25px] w-50%  shadow-xl'>
              <div  >
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