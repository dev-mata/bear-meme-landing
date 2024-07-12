import React from "react";
import Image from "next/image";

import { register } from 'swiper/element/bundle';

const Roadmap = () => {

  register();
    return (
      <swiper-container>
      <swiper-slide>Slide 1</swiper-slide>
      <swiper-slide>Slide 2</swiper-slide>
      <swiper-slide>Slide 3</swiper-slide>
      ...
    </swiper-container>
    
      );
  

  };

export default Roadmap;
