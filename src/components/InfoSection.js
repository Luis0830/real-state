import React, { useState, useEffect }  from 'react';
import styled from 'styled-components';
import { Button } from './Button';
import sanityClient from "../lib/client";
import imageUrlBuilder from "@sanity/image-url";


const builder = imageUrlBuilder(sanityClient);

function urlFor(source) {
    return builder.image(source);
}
const Section = styled.section`
width: 100%;
height: 100%;
padding: 4rem 0rem;
`;
const Container = styled.div`
padding: 3rem calc((100vw - 1300px) / 2);
display: grid;
grid-template-columns: 1fr 1fr;
grid-template-rows: 800px;

@media screen and (max-width: 768px){
    grid-template-columns: 2fr;
    grid-template-rows: 300px;
    padding-top: 0;
}
`;
const Columnleft = styled.div`
display: flex;
justify-content: center;


@media screen and (max-width: 768px) {
    line-height: 1.0; 
    align-items: center;
    text-align: center;
    

}
`;
const ColumnRight = styled.div`
padding: 1rem 2rem;
order: ${({ reverse }) => (reverse? '1' : '2')};
display: flex;
justify-content: center;
align-items: center;



@media screen and (max-width: 768px) {
    order: ${({ reverse }) => (reverse? 2 : 1)};
    padding: 0;
    
}

img{
    width: 100%;
    height: 100%;
    object-fit:cover;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;


    @media screen and (max-width: 768px){
        width: 90%;
        height: 90%;
        
    }

}
`;



const InfoSection = () => {
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
        <div>
        {properties && properties.map((property) => (
       <Section>
        <Container className='gap-1'>
            <Columnleft className='grid items-center justify-center'>
            <div className='flex-colum h-[60%] w-[100%] border-2 border-black border-solid items-center justify-center text-center'>
            <h1>{property.title}</h1>
            <p>{property.price}</p>
            <p>{property.id}</p>
            <Button to='/inmueble' primary='true'>Mas informacion</Button>
            </div>
            </Columnleft>
            <ColumnRight>
            <img src='' alt="home" className='rounded-tl-curves rounded-br-curves'/>
            </ColumnRight>
        </Container>
       </Section>
       ))};
       </div>
    )
}

export default InfoSection;