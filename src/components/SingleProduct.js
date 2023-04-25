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
import { BsArrowsFullscreen } from "react-icons/bs";
import Footer from './footer/Footer';


function SingleProduct({ product }) {

  console.log(product.img1);
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
  ].filter(image => image.url !== null);
  console.log(images);

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
          <div className='w-full'>
            <ImgCarrusel slides={images} />
            {/* <SingleSlider image={product.images.url} /> */}
          </div>        
          <container className="flex flex-col content-center align-center mt-5 justify-center pl-[15%]">
            <div>
              <h1>{product.title}</h1>
              <p>{product.details}</p>
              <div className='flex justify-between' >
              <p><FaCircle className='text-green mr-1'/>{product.status}</p> 
              <p>{product.price}</p>
              </div>
            </div>
            <div className='flex'>
              <div>
                <p><FaBed />{product.beds} Habitaciones</p>
                <p><FaToilet />{product.bath} Baños</p>
                <p><GoLocation /> {product.location}</p>
              </div>
              <div>
                <p> <BsArrowsFullscreen />{product.mts}</p>
                <div>iconos</div>
              </div>
            </div>
            <button>Contactanos</button>
          </container>
        </section>
      </>
      <Footer />
    </motion.div>
  )

}

export default SingleProduct;