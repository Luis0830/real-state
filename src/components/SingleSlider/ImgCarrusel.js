import React, {useState} from 'react'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'; 
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
    <div className='max-w-[1400px] h-[700px] w-full m-auto py-4 px-4 relative'>
        <div style={{backgroundImage: `url(${slides[currentIndex].url})`}} className='w-full h-full rounded-[20px] bg-center bg-cover duration-500'>

        </div>
      {/* Left Arrow*/}
    <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-[50%] p-2 bg-arrows/20 text-white cursor-pointer'>
    <BsChevronCompactLeft onClick={prevSlide} size={30}/>
    </div>
      {/* Right Arrow*/}
    <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
    <BsChevronCompactRight onClick={nextSlide} size={30}/>
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