import React, { useState } from "react";
import styled from 'styled-components';
import Slider from 'react-slick';
import AirForce1 from '../img/iconicshoes/airforce1.webp';
import AirJordan1 from '../img/iconicshoes/airjordan1.webp';
import AirMax from '../img/iconicshoes/airmax.webp';
import Blazer from '../img/iconicshoes/blazer.webp';
import Metcon from '../img/iconicshoes/metcon.webp';
import Pegasus from '../img/iconicshoes/pegasus.webp';
import SliderCard from "../components/SliderCard";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Container = styled.div`
  margin: 0 auto;
  text-align: left;
  position: relative;
  justify-content: center;
  align-items: center;
  max-width: 1400px;
  margin-top:60px;
  margin-bottom: 40px;
`;

const Image = styled.img`
    height: 100px;
`

const Title = styled.div`
  flex-direction: column;
  font-size: 22px;
  margin-top: -30px;
  left: calc(5%);
  position: absolute;
  z-index: 1; 
`;

const StyledSlider = styled(Slider)`
  width: 90%;
  max-width: 1280px;
  margin: 0 auto;
  .slick-slide > div {
    display: flex;
    justify-content: center;
  }

  .slick-prev,
  .slick-next {
    position: absolute;
    z-index: 1;
    top: 50%;
    transform: translateY(-50%);
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: lightgray;
    font-size: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    &:hover {
      background-color:gray;
    }
    &:before {
      display: none;
    }
  }
  .slick-prev {
    left: -40px;
  }
  .slick-next {
    right: -40px;
  }
`;



const AlwaysIconic = () => {
  const [isPaused, setIsPaused] = useState(false);
  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <div className="slick-next"></div>,
    nextArrow: <div className="slick-next"></div>,
    dots: false,
    pauseOnHover: true,
    autoplay: !isPaused,
    autoplaySpeed: 6000,
    draggable: false,
    swipe: false,
    touchMove: false,
    rtl:false,
    beforeChange: (current, next) => console.log(`Slide changing from ${current} to ${next}`),
    afterChange: current => console.log(`Slide changed to ${current}`),
  };
  return (
    <Container>
        <Title>Always Iconic</Title>
        <StyledSlider {...settings}>
            <SliderCard source={AirForce1} />
            <SliderCard source={AirJordan1}/>
            <SliderCard source={AirMax}/>
            <SliderCard source={Blazer}/>
            <SliderCard source={Metcon}/>
            <SliderCard source={Pegasus}/>
        </StyledSlider>
    </Container>
  )
}

export default AlwaysIconic;
