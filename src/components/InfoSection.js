import React, {useState, useEffect }  from 'react';
import styled from 'styled-components';
import { Button } from './Button';
import sanityClient from "../lib/client";
import imageUrlBuilder from "@sanity/image-url";
import { GoLocation} from "react-icons/go";
import { Link } from 'react-router-dom';
import Footer from './footer/Footer';


const builder = imageUrlBuilder(sanityClient);

function urlFor(source) {
    return builder.image(source);
}
// const Section = styled.section`
// width: 100%;
// height: 100%;
// padding: 4rem 0rem;
// `;
// const Container = styled.div`
// padding: 3rem calc((100vw - 1300px) / 2);
// display: grid;
// grid-template-columns: 1fr 1fr;
// grid-template-rows: 800px;

// @media screen and (max-width: 768px){
//     grid-template-columns: 2fr;
//     grid-template-rows: 300px;
//     padding-top: 0;
// }
// `;
// const Columnleft = styled.div`
// display: flex;
// justify-content: center;


// @media screen and (max-width: 768px) {
//     line-height: 1.0; 
//     align-items: center;
//     text-align: center;
    

// }
// `;
// const ColumnRight = styled.div`
// padding: 1rem 2rem;
// order: ${({ reverse }) => (reverse? '1' : '2')};
// display: flex;
// justify-content: center;
// align-items: center;



// @media screen and (max-width: 768px) {
//     order: ${({ reverse }) => (reverse? 2 : 1)};
//     padding: 0;
    
// }

// img{
//     width: 100%;
//     height: 100%;
//     object-fit:cover;
//     box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;


//     @media screen and (max-width: 768px){
//         width: 90%;
//         height: 90%;
        
//     }

// }
// `;



const InfoSection = () => {
    const [properties, setProperties] = useState(null);
    const [properties2, setProperties2] = useState(null);

useEffect(() => {
    sanityClient
        .fetch(
            `*[_type == "infoSec"]{
  title,
  id,
  price,
  label,
  description,
  label,
  torf,
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

// useEffect(() => {
//     sanityClient
//         .fetch(
//             `*[_type == "property"]{
//   title,
//   id,
//   price,
//   path,
//   location,
//   status,
//   nivel,
//   tipo,
//   info,
//   propertytype,
//   beds,
//   mts,
//   mt2,
//   bath,
//   park,
//   patio,
//   mainImage{
//     asset->{
//       _id,
//       url
//     },
//   },
// }`
//         )
//         .then((data) => setProperties(data))
//         .catch(console.error);
// }, []);


// const videoUrl = data.video.asset.url

    return(
        <div className='antialiased bg-bggrey h-full overflow '>
        <div className='bg-bggrey'>
        {properties && properties.map((infoSec) => (
       <section className='w-full pt-12 mb-10 bg-bggrey'>
        <container className='m-0 w-full h-full gap-1 antialiased bg-bggrey md:grid mid:grid md:grid-cols-2   mid:grid-cols-2  sm:grid-cols-1 gap-1 sm:gap-0 mid:gap-0'>
            <div  className={infoSec.torf? 'max-w-[75%] m-10 sm:-mt-1 md:order-last mid:order-last sm:order-last grid  object-contain items-center rounded-[35px] justify-center shadow-lg bg-bggrey overflow-hidden' : 'max-w-[75%] m-10 sm:-mt-1 shadow-lg md:order-first mid:order-first sm:order-last grid  md:ml-60 mid:ml-[20%]  object-contain items-center rounded-[35px] justify-center bg-bggrey overflow-hidden'}>
            <div className='p-10 sm:p-5 flex-colum py-10 sm:py-5 md:px-10 mid:px-10 w-[100%] shadow-lg rounded-[35px] bg-white items-center justify-center text-center'>
            <h1 className=' md:mb-10 mid:mb-5 sm:mb-2 md:text-[50px] mid:text-[30px] sm:text-[20px] text-d-blue' >{infoSec.title}</h1>

            <div className='md:hidden mid:hidden sm:mb-2 md:mx-20 mid:mx-15 md:my-2 grid object-cover md:max-h-[700px] md:max-w-[800px] items-center content-center justify-center text-center'>
            {infoSec.mainImage && (
            <img  src={urlFor(infoSec.mainImage).url()} alt="home" className='h-full md:ml-20 w-full sm:rounded-[10px] md:rounded-tl-curves mid:rounded-tl-curves md:rounded-br-curves mid:rounded-br-curves object-cover shadow-2xl' />
            )}
            </div>
            
            <div className='flex md:gap-10 mid:gap-10 sm:gap-2 items-center justify-center text-center text-d-red font-semibold'>
                <p className='sm:text-[12px] '>{infoSec.price}</p> 
                <p className='font-semibold sm:text-[12px]'><GoLocation className='md:mr-2 text-[20px] ' />{infoSec.label}</p>
                </div>
            <p className='md:my-10 mid:my-4 sm:my-3 text-[17px] sm:text-[11px] text-justify sm:font-[520] text-center font-normal'>{infoSec.description}</p>
            <div className='items-center justify-center text-center cursor-pointer' ><Link to='/inmueble'><button className=' cursor-pointer p-4 sm:p-3 w-[50%] sm:w-full md:mb-5 border-2 border-solid rounded-[25px] bg-d-blue text-white font-bold md:text-[15px] sm:text-[12px]'  primary='true'>Mas informacion</button></Link></div>
            </div>
            </div>
            <div className=' sm:hidden mx-20 md:mx-20 mid:mx-10 md:my-2 grid object-cover max-h-[700px] max-w-[800px] items-center content-center justify-center text-center'>
            {infoSec.mainImage && (
            <img  src={urlFor(infoSec.mainImage).url()} alt="home" className={infoSec.torf? 'sm:-ml-4 h-full md:ml-20 mid:ml-[10%] w-full md:rounded-tl-curves mid:rounded-tl-curves md:rounded-br-curves mid:rounded-br-curves object-cover shadow-2xl' : 'sm:-ml-5 h-full w-full md:-ml-20 mid:-ml-[10%] md:rounded-tr-curves mid:rounded-tr-curves md:rounded-bl-curves mid:rounded-bl-curves object-cover shadow-2xl'} />
            )}
            </div>
        </container>
       </section>
       ))};
       </div>


       {/* <div>
        {properties && properties.map((property) => (
       <Section>
        <Container className='gap-1'>
            <Columnleft className='grid items-center justify-center'>
            <div className='flex-colum h-[60%] w-[100%] rounded-lg border-2 border-black border-solid items-center justify-center text-center'>
            <h1>{property.title}</h1>
            <p>{property.price}</p>
            <p>{property.id}</p>
            <Button to='/inmueble' primary='true'>Mas informacion</Button>
            </div>
            </Columnleft>
            <ColumnRight>
            {property.mainImage && (
            <img src={urlFor(property.mainImage).url()} alt="home" className='rounded-tl-curves rounded-br-curves'/>
            )}
            </ColumnRight>
        </Container>
       </Section>
       ))};
       </div> */}
       <Footer />
       </div>
        
    )
}

export default InfoSection;