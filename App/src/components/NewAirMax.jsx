import React from 'react';
import styled from 'styled-components';
import NewAirMaxImage from '../img/models/NewAirMax.webp';
import NikeAirMaxPulse from '../img/texts/NikeAirMaxPulse.png'

const Container = styled.div`
  margin: 0 auto;
  text-align: left;
  position: relative;
  justify-content: center;
  align-items: center;
  max-width: 1400px;
  margin-top:-20px;
`;

const Title = styled.div`
  flex-direction: column;
  font-size: 22px;
  margin-top: -30px;
  left: calc(5%);
  position: absolute;
  z-index: 1; 
`;

const StyledImg = styled.img`
  width: 90%;
  height: auto;
  background-color: #fff;
  display: block;
  margin: 8% auto 0; 
  box-sizing: border-box;
  position: relative;
  min-width: 400px;
`;


const StyledText = styled.div`
  font-size: 11px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align:center;
  margin:0 auto;
  margin-bottom: 5px;
  align-items: center;
  width: 100%;
  width: 400px;
`


const ShopButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 140px;
  margin: 0 auto;
  border-radius: 12px;
  margin-top: 10px;
  margin-bottom:20px;
  padding: 5px 1px;
  background-color: black;
  color: white;
  font-size: 12px;
  cursor: pointer;
  &:hover {
    background-color:gray;
  }
`

const StyledLogo = styled.img`
  height: 40px;
  background-color: #fff;
  display: block;
  margin: 0 auto;
  margin-top: 40px;
  margin-bottom: 10px;
  box-sizing: border-box;
  position: relative;
  width: auto;
`;

const NewAirMax = () => {
    return (
      <Container>
          <Title>New in Air Max</Title>
          <StyledImg src={NewAirMaxImage} alt="NewAirMax" />
          <StyledLogo src={NikeAirMaxPulse} alt="NikeAirMaxPulse" />
          <StyledText>Find your beat with the unreal Air sensation and extreme</StyledText>
          <StyledText>comfort of Pulse--in a brand new colorway.</StyledText>
          <ShopButton>Shop All Air Max</ShopButton>
      </Container>
  );
  }

export default NewAirMax