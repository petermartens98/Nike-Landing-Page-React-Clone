import React from "react";
import styled from "styled-components";

const ImageContainer = styled.div`
  position: relative;
`;

const Image = styled.img`
  width: 250px;
  height: auto;
  background-color: #999;
  flex: 1;
  @media only screen and (max-width: 1360px) {
    width:240px;;
  }
  @media only screen and (max-width: 1310px) {
    width:230px;;
  }
  @media only screen and (max-width: 1260px) {
    width:220px;;
  }
  @media only screen and (max-width: 1210px) {
    width:210px;;
  }
  @media only screen and (max-width: 1160px) {
    width:200px;;
  }
`;

const Card = ({ type, source }) => {
  return (
    <ImageContainer>
      <Image src={source} />
    </ImageContainer>
  );
};

export default Card;