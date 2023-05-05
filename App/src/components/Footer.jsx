import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color:black;
  padding:5px;
  position: relative;
  bottom: 0;
  left: 0;
  right: 0;
`;

const TextContainer = styled.div`
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  margin-top:10px;
  margin-bottom:10px;
`;

const BottomRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  font-size: 10px;
  max-width: 1200px;;
`;

const Country = styled.span`
  color:white;
  margin:5px;
`;

const AllRightsReserved = styled.span`
  color:white;
  margin:5px;
`;

const Footer = () => {
  return (
    <Container>
      <TextContainer>
        <BottomRow>
          <Country>United States</Country>
          <AllRightsReserved>© 2023 Nike, Inc. This is a Clone.</AllRightsReserved>
        </BottomRow>
      </TextContainer>
    </Container>
  );
};

export default Footer;
