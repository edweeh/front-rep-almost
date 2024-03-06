import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import PetImage from "./petimage.jpg"
const Imgslider = () => {
  return (
    
<Splide>
  <SplideSlide>
    <img src={PetImage} alt="Image 1"/>
  </SplideSlide>
  <SplideSlide>
    <img src={PetImage} alt="Image 2"/>
  </SplideSlide>
</Splide>
  )
}


  


export default Imgslider
