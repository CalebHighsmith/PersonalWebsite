import React, { useState, useRef, useEffect } from 'react';

import { CarouselButton, CarouselButtonDot, CarouselButtons, CarouselContainer, CarouselItem, CarouselItemImg, CarouselItemText, CarouselItemTitle, CarouselMobileScrollNode } from './TimeLineStyles';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { TimeLineData } from '../../constants/constants';

const TOTAL_CAROUSEL_COUNT = TimeLineData.length;

const Timeline = () => {
  const [activeItem, setActiveItem] = useState(0);
  const carouselRef = useRef();

  // const scroll = (node, left) => {
  //   return node.scrollTo({ left, behavior: 'smooth' });
  // }

  const handleClick = (e, i) => {
    e.preventDefault();

    if (carouselRef.current) {
      const scrollLeft = Math.floor(carouselRef.current.scrollWidth * 0.7 * (i / TimeLineData.length));
      
      scroll(carouselRef.current, scrollLeft);
    }
  }

  // const handleScroll = () => {
  //   if (carouselRef.current) {
  //     const index = Math.round((carouselRef.current.scrollLeft / (carouselRef.current.scrollWidth * 0.7)) * TimeLineData.length);

  //     setActiveItem(index);
  //   }
  // }

  // // snap back to beginning of scroll when window is resized
  // // avoids a bug where content is covered up if coming from smaller screen
  // useEffect(() => {
  //   const handleResize = () => {
  //     scroll(carouselRef.current, 0);
  //   }

  //   window.addEventListener('resize', handleResize);
  // }, []);

  return (
    <Section id='about'>
      <SectionTitle>About Me</SectionTitle>
      <SectionText>During High School, I dual-enrolled and graduated High school and college in the same year with an A.A.S degree in Mechatronics Engineering. I got exposed to programming during my Mechatronics studies where I learned PLC programming. This sparked my interest like never before and in March of 2019, I began my programming journey. I was self-taught for a year then found out very quickly that this is what I wanted to do with my life! I am currently studying at Southwestern University in Georgetown, Texas, and building projects on the side when I can!

      </SectionText>

    </Section>
  );
};

export default Timeline;
