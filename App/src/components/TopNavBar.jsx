import React from 'react';
import styled from 'styled-components';
import JordanLogo from '../img/JordanLogo.png';
import ConverseLogo from '../img/ConverseLogo.png';

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color:#F4F6F6;
  padding:5px;
  position: relative;
  top: 0;
  left: 0;
  right: 0;
`;


const Brand = styled.div`
  display: flex;
  align-items: center;
  margin-left:30px;
`;

const Logo = styled.img`
  height: 20px;
  margin-right: 20px;
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
`;

const NavLink = styled.a`
  text-decoration: none;
  font-size: 12px;
  color: #333;
  &:not(:last-child)::after {
    content: '|';
    margin:5px;;
    color: #333;
  }
`;

const TopNavBar = () => {
  return (
    <Navbar>
      <Brand>
        <Logo src={JordanLogo} alt="Jordan Logo" />
        <Logo src={ConverseLogo} alt="Converse Logo" />
      </Brand>
      <Links>
        <NavLink href="#">Find a Store</NavLink>
        <NavLink href="#">Help</NavLink>
        <NavLink href="#">Join Us</NavLink>
        <NavLink href="#">Sign In</NavLink>
      </Links>
    </Navbar>
  );
};

export default TopNavBar;

