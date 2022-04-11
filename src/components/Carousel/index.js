import React, {useState} from 'react';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import {SliderData} from './sliderdata';
import './index.css';

const Carousel = ({ slides }) => {
 const [current, setCurrent] = useState(0);
 const length = slides.length;

 const nextSlide = () =>{
     setCurrent(current === length - 1 ? 0 : current + 1)
 }

 const prevSlide = () =>{
    setCurrent(current === 0 ? length - 1 : current - 1)
 }


 if(!Array.isArray(slides) || slides.length <= 0){
     return null;
 }

  return (
    <section className="slider">
        <ArrowCircleLeftIcon className="left-arrow" onClick={prevSlide}/>
        <ArrowCircleRightIcon className="right-arrow" onClick={nextSlide}/>
        {SliderData.map((slide, index) => {
            return (
                <div className={index === current ? 'slide ativo' : 'slide'} key={index}>
                    {index === current && (
                        <>
                        <img src={slide.image} alt="Imagens dos nossos treinamentos" 
                        className="image-carousel"/>
                        <h4 className="title-carousel" color="primary">{slide.title}</h4>
                        <p className="description-carousel" color="primary">{slide.description}</p>
                        </>
                    )}
                </div>
            ) 
        })}
    </section>
  )
}

export default Carousel;