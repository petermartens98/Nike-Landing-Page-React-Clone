import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import model1 from '../img/models/model1.webp';
import FitnessGearForAllYouDo from '../img/texts/FitnessGearForAllYouDo.png';


const StyledImage = styled.img`
  width: 90%;
  height: auto;
  background-color: #fff;
  display: block;
  margin: 0 auto;
  margin-top:35px;
  box-sizing: border-box;
  position: relative;
  min-width:400px;
`;

const OverlayImage = styled.img`
  position: absolute;
  bottom: 80px;
  width: 220px;
  height: auto;
  left:5%;
  margin-bottom:-10px;
`;

const OverlayContainer = styled.div`
  position: absolute;
  bottom: 30px;
  left: 6%;
  display: flex;
  flex-direction: column;
  align-items: left;
`;

const OverlayText = styled.p`
  width:260px;
  margin-top: 5px;
  margin-left: 5%;
  font-size: 12px;
  color: #fff;
`;

const Container = styled.div`
  margin: 0 auto;
  text-align: left;
  position: relative;
  justify-content: center;
  align-items: center;
  max-width:1400px;
  min-width:400px;
`;

const ShopButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width:80px;
  margin-left: 5%;
  margin-top: 12px;
  padding: 3px 1px;
  border:none;
  border-radius:12px;
  cursor:pointer;
  font-size:12px;
  &:hover{
    background-color: lightgray;
  }
`;

const TopImg = () => {
  const [overlayImg, setOverlayImg] = useState(FitnessGearForAllYouDo);

  return (
    <Container>
      <StyledImage src={model1} alt="Model 1" />
      <OverlayContainer>
        <OverlayImage src={overlayImg} alt="Overlay" />
        <OverlayText>Wherever your workout takes you, we have you <br /> covered with new men's fitness apparel.</OverlayText>
        <ShopButton>Shop</ShopButton>
      </OverlayContainer>
    </Container>
  );
};

export default TopImg;
