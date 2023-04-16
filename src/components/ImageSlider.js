// import React from 'react';
// import Slider from 'react-slick';
// import sanityClient from "../lib/client";
// import imageUrlBuilder from "@sanity/image-url";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const builder = imageUrlBuilder(sanityClient);

// function urlFor(source) {
//   return builder.image(source);
// }

// function ImageSlider({ images }) {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1
//   };

//   return (
//     <Slider {...settings}>
//       {images.map((image) => (
//         <img src={urlFor(image).url()} alt="" /> 
//       ))}
//     </Slider>
//   );
// }

// export default ImageSlider;

