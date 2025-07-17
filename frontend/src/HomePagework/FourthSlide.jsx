

  // These are the images used in the slide


  
// 

        
 





import React from 'react';
import { Box, IconButton, useBreakpointValue,Image, Heading } from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const cards = [
  'https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1676643109_half-price-web.jpg',
  'https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1677139694_serums-combined-thick-strip-web.jpg',
  
];
// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function FourthSlide() {


const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true, // Enable autoplay
  autoplaySpeed: 5000, // Delay between slides in milliseconds
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
  ],
};

return (
  <><Box w="99%" margin={"auto"} mt="50px">
  <Slider {...settings}>
    {cards.map((el,index)=>
    <div>
    <Image width="100%" src={el}/>
   
    </div>
    
    )}
    
  </Slider></Box></>
);



}

  // These are the images used in the slide


  
