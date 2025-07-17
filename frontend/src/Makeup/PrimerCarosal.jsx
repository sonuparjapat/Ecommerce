
import { Box, IconButton, useBreakpointValue,Image, Heading } from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
// And react-slick as our Carousel Lib

import PrimerProduct from './PrimerProducts';


import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { commongetrequest } from '../services/services';

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

export default function PrimerCarousel() {
const [carddata,setCarddata]=useState([])

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

useEffect(()=>{
getcards()
},[])
const getcards=async()=>{
  try{
const res=await commongetrequest('products/getcards')
setCarddata(res?.data?.data||[])
  }catch(err){
    console.log(err?.message)
  }
}
return (
  <><Box w="99%" margin={"auto"}>
  <Slider {...settings}>
    {carddata?.map((el)=>
    
     <div>
      <Image width="100%" src={el?.link}/>
      
    </div>
    
    )}
  
  </Slider></Box></>
);



}