





import React, { useEffect, useState } from 'react';
import { Box, IconButton, useBreakpointValue,Image, Heading } from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { commongetrequest } from '../services/services';
const cards = [
  'https://i.postimg.cc/nrMdhFBR/refreshing-soda-bottle-blue-liquid-wave-generated-by-ai.jpg',
  'https://thumbs.dreamstime.com/b/cocktail-drinks-vector-realistic-banner-night-party-template-summer-collection-d-illustrations-illustration-117440141.jpg',
  'https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2,f-gif/mediafiles/ecomm/misc/1675360432_serum-combined-hp-web.gif',
  "https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1677070210_lakme_mrunal-2596x836-1.jpeg"
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

export default function HomepageCarousel() {
const [carddata,setCardsdata]=useState([])

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
const res=await commongetrequest("products/getcards")
if(res?.status==200){
  setCardsdata(res?.data?.data)
}
  }catch(err){
    console.log(err?.message)
  }
}
return (
  <><Box w="99%" margin={"auto"}>
  <Slider {...settings}>
    {carddata.map((el,index)=>
    <div>
    <Image width="100%" src={el.link}/>
   
    </div>
    
    )}
    
  </Slider></Box></>
);



}

  // These are the images used in the slide


  