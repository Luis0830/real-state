import { useState } from 'react';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';
import { GoPrimitiveDot } from 'react-icons/go';
import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder(sanityClient);


function urlFor(source) {
  return builder.image(source);
}

const SingleSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const length = images.length;

  const sliderStyle = {
    height: '100%',
    position: 'relative',
  };

  const slideStyle = {
    width: '100%',
    height: '100%',
    backgroundImage: `url(${urlFor(images[currentIndex].asset).url()})`,
    borderRadius: '10px',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  };

  const leftArrowStyle = {
    position: 'absolute',
    top: '50%',
    transform: 'translate(0, -50%)',
    left: '15px',
    fontSize: '3rem',
    color: '#fff',
    zIndex: '10',
    cursor: 'pointer',
    userSelect: 'none',
  };

  const rightArrowStyle = {
    position: 'absolute',
    top: '50%',
    transform: 'translate(0, -50%)',
    right: '15px',
    fontSize: '3rem',
    color: '#fff',
    zIndex: '10',
    cursor: 'pointer',
    userSelect: 'none',
  };

  const dotStyle = {
    fontSize: '2rem',
    color: '#fff',
    cursor: 'pointer',
    userSelect: 'none',
  };

  const prevSlide = () => {
    const index = (currentIndex - 1 + length) % length;
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    const index = (currentIndex + 1) % length;
    setCurrentIndex(index);
  };

  return (
    <div style={sliderStyle}>
      <div style={slideStyle}></div>
      <FaArrowAltCircleLeft style={leftArrowStyle} onClick={prevSlide} />
      <FaArrowAltCircleRight style={rightArrowStyle} onClick={nextSlide} />
      <div style={{ textAlign: 'center' }}>
        {images.map((img, index) => (
          <GoPrimitiveDot
            key={index}
            style={dotStyle}
            onClick={() => setCurrentIndex(index)}
            color={index === currentIndex ? 'red' : 'white'}
          />
        ))}
      </div>
    </div>
  );
};

export default SingleSlider;

// import { useState } from 'react';
// import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';
// import { GoPrimitiveDot } from 'react-icons/go';
// import sanityClient from '@sanity/client';
// import imageUrlBuilder from '@sanity/image-url';

// const builder = imageUrlBuilder(sanityClient);


// function urlFor(source) {
//   return builder.image(source);
// }



// const SingleSlider = ({ image }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const length = image.length;

//   const sliderStyle = {
//     height: '100%',
//     position: 'relative',
//   };

//   const slideStyle = {
//     width: '100%',
//     height: '100%',
//     backgroundImage: `url(${urlFor(image[currentIndex]).url()})`,
//     borderRadius: '10px',
//     backgroundPosition: 'center',
//     backgroundSize: 'cover',
//   };

//   const leftArrowStyle = {
//     position: 'absolute',
//     top: '50%',
//     transform: 'translate(0, -50%)',
//     left: '15px',
//     fontSize: '3rem',
//     color: '#fff',
//     zIndex: '10',
//     cursor: 'pointer',
//     userSelect: 'none',
//   };

//   const rightArrowStyle = {
//     position: 'absolute',
//     top: '50%',
//     transform: 'translate(0, -50%)',
//     right: '15px',
//     fontSize: '3rem',
//     color: '#fff',
//     zIndex: '10',
//     cursor: 'pointer',
//     userSelect: 'none',
//   };

//   const dotStyle = {
//     fontSize: '2rem',
//     color: '#fff',
//     cursor: 'pointer',
//     userSelect: 'none',
//   };

//   const prevSlide = () => {
//     const index = (currentIndex - 1 + length) % length;
//     setCurrentIndex(index);
//   };

//   const nextSlide = () => {
//     const index = (currentIndex + 1) % length;
//     setCurrentIndex(index);
//   };

//   return (
//     <div style={sliderStyle}>
//       <div style={slideStyle}></div>
//       <FaArrowAltCircleLeft style={leftArrowStyle} onClick={prevSlide} />
//       <FaArrowAltCircleRight style={rightArrowStyle} onClick={nextSlide} />
//       <div style={{ textAlign: 'center' }}>
//         {image.map((img, index) => (
//           <GoPrimitiveDot
//             key={index}
//             style={dotStyle}
//             onClick={() => setCurrentIndex(index)}
//             color={index === currentIndex ? 'red' : 'white'}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SingleSlider;