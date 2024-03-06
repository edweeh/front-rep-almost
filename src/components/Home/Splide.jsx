import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import all from './alll.jpg'
const Splide = () => {
  return (
    
<Splide>
  <SplideSlide>
    <img src="image1.jpg" alt="Image 1"/>
  </SplideSlide>
  <SplideSlide>
    <img src="image2.jpg" alt="Image 2"/>
  </SplideSlide>
  <SplideSlide>
    <img src={all} alt="Image 3"/>
  </SplideSlide>
</Splide>
  )
}

export default Splide
