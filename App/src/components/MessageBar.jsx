import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const Container = styled.div`
    width: 100%;
    background-color:#F4F6F6;
    padding-top:10px;
    padding-bottom:10px;
    margin:0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    top: 34px;
    text-align: center;
`


const slideIn = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0%);
  }
`;

const slideOut = keyframes`
  from {
    transform: translateX(0%);
  }
  to {
    transform: translateX(-100%);
  }
`;

const TextWrapper = styled.div`
  display: column;
  justify-content: center;
  align-items: center;
  animation-name: ${({ slidingOut }) => (slidingOut ? slideOut : slideIn)};
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
  width: 100%;
  height: 100%;
`;

const Text = styled.div`
  font-size: 16px;
  margin-right: 5px;
  @media screen and (max-width: 500px){
    font-size:14px;
  }
`;

const SubText = styled.div`
  font-size: 12px;
  margin-top: 5px;
  @media screen and (max-width: 500px){
    font-size:10px;
  }
`;

const messages = [  { text: 'Free Shipping + Returns, Free Membership, Exclusive Products', subText: '<span style="text-decoration: underline;">Join Now</span>' },
                    { text: 'Why Wait? Try Store Pickup', subText: 'Buy online and find a store near you for pick up in less than 2 hours. <span style="text-decoration: underline;">Shop Now.</span>' },
                    { text: 'Limited Time: Earn $75 with a new Apple Card.', subText: '<span style="text-decoration: underline;">Learn more. Terms apply.</span>' },];

const MessageBar = () => {
  const [index, setIndex] = useState(0);
  const [slidingOut, setSlidingOut] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlidingOut(true);
      setTimeout(() => {
        setIndex((index) => (index + 1) % messages.length);
        setSlidingOut(false);
      }, 500);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const { text, subText } = messages[index];

  return (
    <Container>
      <TextWrapper slidingOut={slidingOut}>
        <Text>{text}</Text>
        <SubText dangerouslySetInnerHTML={{ __html: subText }} />
      </TextWrapper>
    </Container>
  );
};

export default MessageBar;
