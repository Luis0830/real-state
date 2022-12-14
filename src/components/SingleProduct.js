import React from 'react';
import {link, useParams} from 'react-router-dom'
import styled from 'styled-components';
import { ImuebleData } from '../data/ImuebleData';
import SingleSlider from './SingleSlider/SingleSlider';
import {GoLocation, GoMail} from 'react-icons/go';
import {FaWhatsapp, FaToilet,FaBed} from 'react-icons/fa';
import { NavTwo } from './Navbar';
import { motion } from 'framer-motion';
import {animationTwo, transition} from './Animations/Animations'


const ProductSection = styled.section`
padding-top: 70px;
padding-bottom: 30px;
background-color: #ece4db;
`;


const SingleProduct = () => {
     const {productId} = useParams();
     const product = ImuebleData.find((product) => product.id === productId);
     const {title, price, label, images, room,
      bath, info} = product;

     
     const ContainerStyles =styled.div`
        width: 600px;
       height: 380px;
       margin: 0 auto;
       padding-bottom: 40px;

       @media screen and (max-width: 768px){
        width: 370px;
       height: 280px;
       }
       ` 
        
  
     const sectionStyle = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        
     }
    const TextContainer = styled.div`
    box-shadow: 1px 2px 9px #d9d9d9;
      width: 60%;
      border-radius: 15px;
      background-color: #fff ;

      @media screen and (max-width: 768px){
        width: 100%;
        

       
       }
    `
      
      
     
     const titleStyle = {
      display: 'flex',
      justifyContent: 'center',
      margin: '1rem',
      gap: '1.5rem',
     }
     const ContentStyle = styled.div`
      display: flex;
      justify-content: center;
      

      @media screen and (max-width: 768px){
      display: column;
     }

      
     `
     const DetailsStyle = styled.div`
     flex: 30%;
     margin-left: 1rem;
     margin-bottom: 1rem;
     display: grid;
    grid-template-columns: repeat(2, 1fr);
     

     @media screen and (max-width: 768px){
      flex: 30%;
      grid-template-columns: repeat(1, 1fr);
     }
     `
         
     const TextDetailsStyle = styled.div`
      
      flex: 50%;

      @media screen and (max-width: 768px){
      flex: 70%;
     }
     `
     const BtnContact = styled.button`
     width: max-content;
    display: inline-block;
    color: lightblue;
    padding: 0.75rem 1.2rem;
    border-radius: 0.4rem;
    cursor: pointer;
    border: 1px solid black;
    transition: var(--transition);
     `


     return (
      <motion.div
      initial="out"
      animate="in"
      exit="out"
      variants={animationTwo}
      transition={transition}
      >
      <NavTwo />
      <ProductSection>
        <section style={sectionStyle}>
        <ContainerStyles>
        <SingleSlider image={images} />
        </ContainerStyles>
        <TextContainer>
          <div style={titleStyle}>
            <h1>{title}</h1>
            <p>{price}</p>
            </div>
            <ContentStyle>
              <DetailsStyle>
              <p><FaBed />{room} Habitaciones</p>
               <p><FaToilet />{bath} Ba??os</p>
               <p><GoLocation /> location</p>
              </DetailsStyle>
              <TextDetailsStyle>
              <p>{info}</p>
              <div>iconos</div>
              <BtnContact>Contactanos</BtnContact>
              </TextDetailsStyle>
            </ContentStyle>
            
          </TextContainer>
        </section>
      </ProductSection>
      </motion.div>
     )

}

export default  SingleProduct;