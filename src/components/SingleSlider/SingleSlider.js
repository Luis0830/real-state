import {useState} from 'react';
import {FaArrowAltCircleLeft, FaArrowAltCircleRight} from 'react-icons/fa';
import {GoPrimitiveDot} from 'react-icons/go';

const SingleSlider = ({ image }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const length = image.length;
  
  const sliderStyle = {
    height: '100%',
    position: 'relative',
  }
  
  const slideStyle = {
    width: '100%',
    height: '100%',
    backgroundImage: `url(${image[currentIndex].img})`,
    borderRadius: '10px',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  
  }
  const leftArrowStyle ={
    position: 'absolute',
    top: '50%',
    transform: 'translate(0, -50%)',
    left: '15px',
    fontSize: '35px',
    color:'#fff',
    zIndex:1,
    cursor: 'pointer',

  }
  const rightArrowStyle ={
    position: 'absolute',
    top: '50%',
    transform: 'translate(0, -50%)',
    right: '15px',
    fontSize: '35px',
    color:'#fff',
    zIndex:1,
    cursor: 'pointer',
  }
  const dotsContainerStyles = {
    display: 'flex',
    justifyContent: 'center',
  }
  const dotsStyle = {
     margin: '0 3px',
     cursor: 'pointer',
     fontSize: '20px',
  }

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0 ;
    const newIndex = isFirstSlide ? image.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }
   const nextSlide = () => {
      setCurrentIndex(currentIndex => (currentIndex === length - 1 ? 0 : currentIndex + 1));
    
  }
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  }

  return(
    
    <div style={sliderStyle}>
      <FaArrowAltCircleLeft style={leftArrowStyle} onClick={goToPrevious}/>
      <FaArrowAltCircleRight style={rightArrowStyle} onClick={nextSlide}/>
      <div style={slideStyle}></div>
      <div style={dotsContainerStyles}>{image.map((slide,slideIndex) => (
        <GoPrimitiveDot key={slideIndex} style={dotsStyle} onClick={() => goToSlide(slideIndex)}/>
      ))}
      </div>
    </div>

  )

  }
export default SingleSlider;