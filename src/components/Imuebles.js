import React, { useState, useEffect }  from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';
import {ImuebleData} from '../data/ImuebleData';
import {GoLocation, GoMail} from 'react-icons/go';
import {FaWhatsapp, FaToilet,FaBed} from 'react-icons/fa';
import { NavTwo } from './Navbar';
import {motion} from 'framer-motion'
import {animationTwo, transition} from './Animations/Animations'
import sanityClient from "../lib/client";
import imageUrlBuilder from "@sanity/image-url";


const builder = imageUrlBuilder(sanityClient);

function urlFor(source) {
    return builder.image(source);
}

const ProSection = styled.div`
padding-top:60px;
padding-bottom: 30px;
display: grid;
  grid-template-columns: repeat(auto-fit, minmax(12rem, 18rem));
  gap: 1.5rem;
  justify-content: center;




`;
const InmuebleSection = styled.div`
display: flex;
flex-direction: row;

`;

const Box = styled.div`
width: 350px;
overflow: hidden;
border-radius: 5px;
box-shadow: 0px 0px 15px -5px;
transition: transform 200ms ease-in;

&:hover{
    transform: scale(1.02);
}
`;
const ImgContainer = styled.div`
overflow: hidden;
position:relative;
height: 300px;
padding:10px;


img{
    overflow: hidden;
    height: 100%;
width: 100%;
object-fit: cover;
border-radius:10px;
}
div{
    position: absolute;
    top:1.5rem;
    left:1rem;
    display: flex;
}
div h4{
    font-weight: 400;
    font-size: 1.1rem;
    color:#fff;
    background-color: rgba(0,0,0,.3);
    border-radius: .5rem;
    padding: .3rem 0.5rem;
    margin-left: .3rem;
}

`;



const BoxContent = styled.div`
padding: 10px;
`;
const ItemPrice = styled.div`
display: flex;
justify-content: space-between;
div{
    display:flex;
    
}
h3{
    margin:5px;
    transition: transform 200ms ease-in;
    cursor: pointer;
    

    &:hover{
    transform: scale(1.30);
    color: grey;
}
}
h2{
    font-size:1.1rem;
    font-weight: 300;
}
`;
const LocationBox = styled.div`

h3{
    padding-bottom: 5px;
    text-align: center;
}
p{
    padding-bottom: 5px;

}
`;
const Details = styled.div`
padding-bottom: 5px;
display: flex;
font-weight: 200;
    font-size: 0.75rem;
    text-align: center;
    h4{
        margin: 3px;
    }
`;
const Botones = styled.div`
display:flex;
`;
const BtnOne = styled.button`
flex:50%;
`;
const BtnTwo = styled.button`
flex:50%;
`;



const Imuebles = () => {

    
    const [properties, setProperties] = useState(null);

    useEffect(() => {
		sanityClient
			.fetch(
				`*[_type == "property"]{
      title,
      id,
      price,
      path,
      location,
      status,
      nivel,
      tipo,
      info,
      propertytype,
      beds,
      mts,
      mt2,
      bath,
      park,
      patio,
      mainImage{
        asset->{
          _id,
          url
        },
      },
    }`
			)
			.then((data) => setProperties(data))
			.catch(console.error);
	}, []);





     return(
     
    <motion.div
    initial="out"
    animate="in"
    exit="out"
    variants={animationTwo}
    transition={transition}
    
    >
    <NavTwo />
    <div className='grid'>
    <div className='content-center items-center text-center'>
                     <h1 className='  content-center items-center text-center'>Arreccifes Del Sol</h1>
                 </div>
    </div>
<ProSection>
                 
               {ImuebleData.map((ImuebleData) => {
                    return (
                        <InmuebleSection key={ImuebleData.id}>
                            
                            
                              <Box>
                               <ImgContainer>
                               <img src={ImuebleData.image} alt="home" />
                               <div><h4><GoLocation />LasTerrenas</h4>
                               <h4>En Venta</h4></div>
                               </ImgContainer>
                               <BoxContent>
                                   <ItemPrice>
                                        <h2>$3,550,500</h2>
                                        <div><h3><FaWhatsapp color='#128C7E' /></h3><h3><GoMail color='#4285F4' /></h3></div>
                                   </ItemPrice>
                               <LocationBox>
                                   <h3>Apartamento Moderno</h3>
                                   <p>localizado en las terrenas</p>
                               </LocationBox>
                               <Details>
                                   <h4><i>icon</i> 3500metros </h4>
                                   <h4><i><FaBed /></i> {ImuebleData.room} habitaciones </h4>
                                   <h4><i><FaToilet /></i> 2 Banos </h4>
                               </Details>
                               <Botones className='gap-2'>
                               <BtnOne className='bg-d-red no-underline py-2 px-3 rounded-[18px] border-0 rounded-r-md'><Link to={`/inmueble/${ImuebleData.id}`} className='no-underline text-[white] text-[14px]' >more info</Link></BtnOne> <BtnTwo className='bg-d-blue border-0 no-underline py-2 px-3 rounded-[18px] font-jaldi border-1 rounded-l-md text-[white] text-poppins text-[14px]'>boton2</BtnTwo>
                               </Botones>
                               </BoxContent>
                              </Box>
                            
                        </InmuebleSection>

                        );
               })}
               
               
               
               
               
               {properties && properties.map((property) => (
                    
                        <InmuebleSection key={property.id}>
                            
                            
                              <Box>
                               <ImgContainer>
                               {property.mainImage && (<img src={urlFor(property.mainImage).url()} alt="" />)}
                               <div><h4><GoLocation />{property.location}</h4>
                               <h4>{property.status}</h4></div>
                               </ImgContainer>
                               <BoxContent>
                                   <ItemPrice>
                                        <h2>{property.price}</h2>
                                        <div><h3><FaWhatsapp color='#128C7E' /></h3><h3><GoMail color='#4285F4' /></h3></div>
                                   </ItemPrice>
                               <LocationBox>
                                   <h3>{property.tipo}</h3>
                                   <p>localizado en {property.location}</p>
                               </LocationBox>
                               <Details>
                                   <h4><i>icon</i> {property.mts} </h4>
                                   <h4><i><FaBed /></i> {property.beds} habitaciones </h4>
                                   <h4><i><FaToilet /></i> {property.bath} Banos </h4>
                               </Details>
                               <Botones className='gap-2'>
                               <BtnOne className='bg-d-red  no-underline py-2 px-3 rounded-[18px] border-0 rounded-r-md'><Link to={`/inmueble/${property.id}`} className='no-underline text-[white] text-[14px]' >more info</Link></BtnOne> <BtnTwo className='bg-d-blue border-0 no-underline py-2 px-3 rounded-[18px] font-jaldi border-1 rounded-l-md text-[white] text-poppins text-[14px]'>boton2</BtnTwo>
                               </Botones>
                               </BoxContent>
                              </Box>
                            
                        </InmuebleSection>

                        
                        ))};
     
     </ProSection>
     </motion.div> 
         
     );
}
         






export default  Imuebles;