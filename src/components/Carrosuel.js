import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  
} from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

const items = [
  {
 
  src: "https://i.ibb.co/WFBtmDF/arkadiaa.jpg",
  altText: 'Arkadia',
    },
  {
  src: "https://i.ibb.co/8004jks/ark.jpg",
  altText: 'Arkadia Visitanos',
    },
  
];

const Carrosuel = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item,i) => {
    return (
      
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={i}
      >
        <img src={item.src} alt="arkadia"  width="100%" height="300px" />
       
      </CarouselItem>
     
    );
  });

  return (
    <div className=" col-md-8 mx-auto "> 
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="<" onClickHandler={previous} />
      <CarouselControl direction="next" directionText=">" onClickHandler={next} />
    </Carousel>
    </div>
  );
}

export default Carrosuel;