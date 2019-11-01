import React from 'react';
import { Slide } from 'react-slideshow-image'
import image1 from './Image/image1.jpg'
import image2 from './Image/image2.jpg'
import image3 from './Image/image3.jpg'
import './Slider.css';

const proprieties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows:true
}

const Slideshow =()=>{
    return(
        <div className = "containerSlide">
            <Slide {...proprieties}>

             <div className = "each-slide">
                <div>
                    <img src={image1} alt = "image1" />
                </div>
             </div>

             <div className = "each-slide">
                <div>
                    <img src={image2} alt = "image2" />
                </div>
             </div>

             <div className = "each-slide">
                <div>
                    <img src={image3} alt = "image3" />
                </div>
             </div>
            </Slide>
       
        </div>
            
    ); 
}
export  default Slideshow;