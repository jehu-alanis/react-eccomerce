import React, { useState } from 'react';
import {  makeStyles } from '@material-ui/core/styles';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import { Link  } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: "4rem",
  },
  appBar:{
    backgroundColor: "#990000",
    boxShadow: "none",
  },
  grow:{
    flexGrow: 1,
  },
  button: {
    marginRight: theme.spacing(2),
    
  },
  
  image: {
    marginRight: "10px",
    height: "3rem",
  },
  
}));

const items = [
  {
 
  src: "https://i.ibb.co/XC1btpw/ark-Taretas.jpg",
  altText: 'Arkadia',
  caption: ''
    },
  {
  src: "https://i.ibb.co/WFBtmDF/arkadiaa.jpg",
  altText: '',
  caption: ''
    },
    {
      src: "https://i.ibb.co/28ngFxR/devoluciones.jpg",
      altText: 'Arkadia Visitanos',
      caption: <Link to='/devoluciones'  style={{ textDecoration: 'none' }}> 
     <p style={{color: "black"}}>
      
     Checa Nuestra politica de devoluciones 
      </p> 
      </Link>
        },
  
];

const Carrosuel = (props) => {
  const classes = useStyles();
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
        <CarouselCaption  captionHeader={item.caption} />
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