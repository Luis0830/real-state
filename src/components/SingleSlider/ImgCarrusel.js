import React, {useState} from 'react'
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa'; 
import {RxDotFilled} from 'react-icons/rx'

function ImgCarrusel({slides}) {

    

        const [currentIndex, setCurrentIndex] = useState(0);

        const prevSlide = () => {
            const isFirstSlide = currentIndex === 0;
            const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
            setCurrentIndex(newIndex);
        }

        const nextSlide = () => {
            const isLastSlide = currentIndex === slides.length - 1;
            const newIndex = isLastSlide ? 0 : currentIndex + 1;
            setCurrentIndex(newIndex);
        }

        //for the dots bellow
        const goToSlide = (slideIndex) => {
            setCurrentIndex(slideIndex);
        };

  return (
    <div className='md:max-w-[1400px] mid:max-w-[1000px] md:h-[700px] mid:h-[550px] w-full m-auto py-4 px-4 object-cover relative shadow-lg rounded-[25px] my-3'>
        <div style={{backgroundImage: `url(${slides[currentIndex].url})`}} className='w-full h-full rounded-[20px] bg-center object-cover bg-cover duration-500'>

        </div>
      {/* Left Arrow*/}
    <div className='absolute top-[50%]  -translate-x-0 translate-y-[-50%] left-7 text-[45px] font-bold  p-2  text-white cursor-pointer'>
    <FaArrowAltCircleLeft onClick={prevSlide}  className='text-[65px] text-white/90'/>
    </div>
      {/* Right Arrow*/}
    <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] right-7 text-2xl p-2  text-white cursor-pointer'>
    <FaArrowAltCircleRight onClick={nextSlide} className='text-[65px] text-white/90'/>
    </div>
    <div className='flex top-4 justify-center py-2'>
        {slides.map((slide,  slideIndex) => (
            <div key={slideIndex} onClick={() => goToSlide(slideIndex)} className='text-2xl cursor-pointer'>
                <RxDotFilled />
            </div>
        ))}
    </div>
    </div>
  )
}

export default ImgCarrusel