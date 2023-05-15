import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components/macro";
import { GoLocation, GoMail } from "react-icons/go";
import { FaWhatsapp, FaToilet, FaBed } from "react-icons/fa";
import { BsArrowsFullscreen } from "react-icons/bs";
import { NavTwo } from "./Navbar";
import { motion } from "framer-motion";
import { animationTwo, transition } from "./Animations/Animations";
import sanityClient from "../lib/client";
import imageUrlBuilder from "@sanity/image-url";
import SingleProduct from "./SingleProduct";
import Footer from "./footer/Footer";
import ImageSlider from "./ImageSlider";

const builder = imageUrlBuilder(sanityClient);

function urlFor(source) {
  return builder.image(source);
}

const ProSection = styled.div`
  padding-top: 60px;
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
  transition: transform 200ms ease-in;

  &:hover {
    transform: scale(1.02);
  }
`;
const ImgContainer = styled.div`
  overflow: hidden;
  position: relative;
  height: 300px;
  padding: 10px;

  img {
    overflow: hidden;
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 10px;
  }
  div {
    position: absolute;
    top: 1.5rem;
    left: 1rem;
    display: flex;
  }
  div h4 {
    font-weight: 400;
    font-size: 1.1rem;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 0.5rem;
    padding: 0.3rem 0.5rem;
    margin-left: 0.3rem;
  }
`;

const BoxContent = styled.div`
  padding: 10px;
`;
const ItemPrice = styled.div`
  display: flex;
  justify-content: space-between;
  div {
    display: flex;
  }
  h3 {
    margin: 5px;
    transition: transform 200ms ease-in;
    cursor: pointer;

    &:hover {
      transform: scale(1.3);
      color: grey;
    }
  }
`;
const LocationBox = styled.div`
  h3 {
    padding-bottom: 5px;
    text-align: center;
  }
  p {
    padding-bottom: 5px;
  }
`;
const Details = styled.div`
  padding-bottom: 5px;
  display: flex;
  font-weight: 200;
  font-size: 0.75rem;
  text-align: center;
  h4 {
    margin: 3px;
  }
`;
const Botones = styled.div`
  display: flex;
`;
const BtnOne = styled.button`
  flex: 50%;
`;
const BtnTwo = styled.button`
  flex: 50%;
`;

const Imuebles = () => {
  const [selectedProductId, setSelectedProductId] = useState(null);

  const [properties, setProperties] = useState(null);

  function onEmailClick() {
    window.open(`mailto:${"imperiobrdominmicanrepublic@gmail.com"}`);
  }

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "property" || _type == ""]{
          title,
          project,
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
          details,
          images[]->{
            asset->{
              _id,
              url
            },
          },
          bath,
          park,
          _id,
          patio,
          mainImage{
            asset->{
              _id,
              url
            },
          },
          img1{
            asset->{
              _id,
              url
            },
          },
          img2{
            asset->{
              _id,
              url
            },
          },
          img3{
            asset->{
              _id,
              url
            },
          },
          img4{
            asset->{
              _id,
              url
            },
          },
          img5{
            asset->{
              _id,
              url
            },
          },
          img6{
            asset->{
              _id,
              url
            },
          },
          img7{
            asset->{
              _id,
              url
            },
          },
          img7{
            asset->{
              _id,
              url
            },
          },
          img8{
            asset->{
              _id,
              url
            },
          },
          img9{
            asset->{
              _id,
              url
            },
          },
          img10{
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

  const handleProductClick = (productId) => {
    setSelectedProductId(productId);
  };

  if (selectedProductId) {
    const selectedProduct = properties.find(
      (property) => property._id === selectedProductId
    );
    return (
      <div>
        <SingleProduct
          product={selectedProduct}
          onClose={() => setSelectedProductId(null)}
        />
      </div>
    );
  }
  
  
  return (
    <motion.div
      initial="out"
      animate="in"
      exit="out"
      variants={animationTwo}
      transition={transition}
      className="bg-blugray"
    >
      <NavTwo />
      <div className="grid">
        <div className="content-center items-center text-center">
          <h1 className=" mt-10 mb-[-30px] content-center items-center text-center">
            Proyectos
          </h1>
        </div>
      </div>
    
      <ProSection>
        {properties &&
          properties.map((property) => (
            <>
              <InmuebleSection className=" rounded-[20px]" key={property.id} >
                <Box className="bg-white shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]" key={property.id}>
                  <ImgContainer className="cursor-pointer" onClick={() => handleProductClick(property._id)}>
                    {property.mainImage && (
                      <img src={urlFor(property.mainImage).url()} alt="" />
                    )}
                    <div>
                      <h4>
                        <GoLocation />
                        {property.location}
                      </h4>
                      <h4>{property.status}</h4>
                    </div>
                  </ImgContainer>
                  <BoxContent>
                    <ItemPrice>
                      <h2 className="text-[14px]">{property.price}</h2>
                      <div>
                        <h3>
                          <Link
                            to={'https://api.whatsapp.com/send?phone=18294432380'} 
                            target='_blank'
                          >
                            <FaWhatsapp color="#128C7E" />
                          </Link>
                        </h3>
                        <h3>
                          <Link to="" onClick={onEmailClick}>
                            <GoMail color="#4285F4" />
                          </Link>
                        </h3>
                      </div>
                    </ItemPrice>
                    <LocationBox>
                      <h3 className="text-center mb-1">{property.project}</h3>
                      <h1 className="text-[15px] mb-1">{property.title}</h1>
                      <p className="text-left">{property.info}</p>
                    </LocationBox>
                    <Details className="my-2">
                      <h4>
                        <i className="mr-1 text-[15px]">
                          <BsArrowsFullscreen />
                        </i>
                        {property.mts}{" "}
                      </h4>
                      <h4>
                        <i>
                          <FaBed className="text-[15px]" />
                        </i>{" "}
                        {property.beds} habitaciones{" "}
                      </h4>
                      <h4>
                        <i>
                          <FaToilet className="text-[15px]" />
                        </i>{" "}
                        {property.bath} Baños{" "}
                      </h4>
                    </Details>
                    <Botones className="gap-2">
                      <BtnOne
                        className="bg-d-red  no-underline py-2 px-3 rounded-[18px] border-0 rounded-r-md"
                        onClick={() => handleProductClick(property._id)}
                      >
                        <p className="cursor-pointer no-underline text-[white] text-[14px]">
                          Detalles
                        </p>
                      </BtnOne>{" "}
                      <BtnTwo className="bg-d-blue border-0 no-underline py-2 px-3 rounded-[18px] font-jaldi border-1 rounded-l-md text-[white] text-poppins text-[14px]">
                        <Link
                          to="/contactenos"
                          className="no-underline text-white"
                        >
                          Contacto
                        </Link>
                      </BtnTwo>
                    </Botones>
                  </BoxContent>
                </Box>
              </InmuebleSection>
            </>
          ))}
      </ProSection>
      
      <Footer />
    </motion.div>
  );
};

export default Imuebles;
