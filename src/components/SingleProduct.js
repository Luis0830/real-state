import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import SingleSlider from './SingleSlider/SingleSlider';
import ImgCarrusel from './SingleSlider/ImgCarrusel';
import { GoLocation, GoMail } from 'react-icons/go';
import { FaWhatsapp, FaToilet, FaBed } from 'react-icons/fa';
import { NavTwo } from './Navbar';
import { motion } from 'framer-motion';
import { animationTwo, transition } from './Animations/Animations'
import sanityClient from "../lib/client";
import imageUrlBuilder from "@sanity/image-url";


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
        <section>
          <div className='w-full'>
            <ImgCarrusel slides={images} />
            {/* <SingleSlider image={product.images.url} /> */}
          </div>
          <container>
            <>
              <h1>{product.title}</h1>
              <p>{product.details}</p>
            </>
            <div>
              <div>
                <p><FaBed />{product.beds} Habitaciones</p>
                <p><FaToilet />{product.bath} Baños</p>
                <p><GoLocation /> location</p>
              </div>
              <div>
                <p>{product.bath}</p>
                <div>iconos</div>
                <button>Contactanos</button>
              </div>
            </div>

          </container>
        </section>
      </>
    </motion.div>
  )

}

export default SingleProduct;