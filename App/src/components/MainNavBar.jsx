import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import NikeLogo from '../img/NikeLogo.png';
import Heart from '../img/Heart.svg';
import BriefcaseIcon from '../img/BriefcaseIcon.png';

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  padding:5 px;
  position: relative;
  top: 25px;
  left: 0;
  right: 0;
`;

const Logo = styled.img`
  height: 28px;
  display: flex;
  align-items: center;
  margin-left:32px;
  margin-top:-20px;
`;

const LinksContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  padding-left:130px;
  @media screen and (max-width: 960px){
    padding-left:140px;
    padding-right:10px;
  }
  @media screen and (max-width: 670px){
    padding-left:0px;
    padding-right:40px;
  }
  @media screen and (max-width: 435px){
    padding-right:25px;
  }
`;

const NavLink = styled.a`
  color: #000;
  font-size: 16px;
  margin-left: 16px;
  text-decoration: none;
  border-bottom: 3px solid transparent;
  
  &:hover {
    transition: border-color 0.4s ease-in-out;
    padding-bottom:10px;
    margin-bottom: -10px;
    border-color:black;
  }
`;

const SearchBar = styled.input`
  width: 140px;
  height: 20px;
  border: none;
  border-radius: 10px;
  background-color: #EBEDEF;
  padding: 3px 6px;
  font-size: 16px;
  margin-right: 32px;
  &:hover{
    background-color:#E5E7E9;
  }
  &:focus{
    outline: transparent;
  }
`;

const IconWrapper = styled.div`
  display: inline-block;
  position: relative;
  cursor: pointer;
  margin-right: 16px;
  height:20px;
  width:20px;
  &:hover {
    &::before {
      content: '';
      position: absolute;
      top: -5px;
      left: -5px;
      right: -5px;
      bottom: -5px;
      border-radius: 50%;
      background-color: rgba(0,0,0,.15);
    }
  }
`;

const HeartIcon = () => (
  <IconWrapper>
    <img src={Heart} alt="Heart Icon" height="20px" />
  </IconWrapper>
);

const BagIcon = () => (
  <IconWrapper>
    <img src={BriefcaseIcon} alt="Bag Icon" height="20px" />
  </IconWrapper>
);

const MainNavBar = () => {
  const [showSearchBar, setShowSearchBar] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 960);
      setShowSearchBar(window.innerWidth > 670);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Navbar>
      <Logo src={NikeLogo} alt="Nike Logo" />
      <LinksContainer>
        {isMobile ? (
          <>
            <NavLink href="#">Men</NavLink>
            <NavLink href="#">Women</NavLink>
            <NavLink href="#">Accessories</NavLink>
          </>
        ) : (
          <>
            <NavLink href="#">New & Featured</NavLink>
            <NavLink href="#">Men</NavLink>
            <NavLink href="#">Women</NavLink>
            <NavLink href="#">Kids</NavLink>
            <NavLink href="#">Accessories</NavLink>
            <NavLink href="#">Sale</NavLink>
          </>
        )}
      </LinksContainer>
      {showSearchBar && <SearchBar type="text" placeholder="Search" />}
      <HeartIcon/>
      <BagIcon/>
    </Navbar>
  );
};

export default MainNavBar;
