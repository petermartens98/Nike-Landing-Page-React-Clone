import React from 'react';
import styled from 'styled-components';
import MomsAllThat from '../img/models/MomsAllThat.webp';
import GiftsForHer from '../img/texts/GiftsForHer.png';

const Container = styled.div`
  margin: 0 auto;
  text-align: left;
  position: relative;
  justify-content: center;
  align-items: center;
  max-width: 1400px;
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
  margin-bottom: 40px;
  box-sizing: border-box;
  position: relative;
  min-width: 400px;
`;

const StyledGiftsForHer = styled.img`
  height: 45px;
  background-color: #fff;
  display: block;
  margin: 0 auto;
  margin-top: 10px;
  margin-bottom: 10px;
  box-sizing: border-box;
  position: relative;
  width: auto;
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
  width: 80px;
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

const GiftIdeas = ({ maxWidth }) => {
  return (
    <Container maxWidth={maxWidth}>
      <Title>Gift Ideas</Title>
      <StyledImg src={MomsAllThat} alt="MomsAllThat" />
      <StyledGiftsForHer src={GiftsForHer} alt="GiftsForHer" />
      <StyledText>This Mother's Day, Members get free expedited shipping on orders $150+.</StyledText>
      <StyledText>Ends 5.7 - exclusions apply.</StyledText>
      <ShopButton>Shop</ShopButton>
    </Container>
  );
};

export default GiftIdeas;

