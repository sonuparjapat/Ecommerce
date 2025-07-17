
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {Box,Image} from "@chakra-ui/react"
import WithSubnavigation from './Navbar';

import PrimerCarousel from './PrimerCarosal';
import PrimerProduct from './PrimerProducts';


const Primer = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1
  
  };

  return (
    <Box>
    <WithSubnavigation/>
<PrimerCarousel/>
<PrimerProduct/>
</Box>
   
    );
};

export default Primer;