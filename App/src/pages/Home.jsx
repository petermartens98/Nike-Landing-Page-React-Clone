import React, { useState, useEffect } from 'react';
import TopNavBar from '../components/TopNavBar';
import MainNavBar from '../components/MainNavBar';
import MessageBar from '../components/MessageBar';
import TopImg from '../components/TopImg';
import GiftIdeas from '../components/GiftIdeas';
import NewAirMax from '../components/NewAirMax';
import LooksEveryOccasion from '../components/LooksEveryOccasion';
import AlwaysIconic from '../components/AlwaysIconic';
import Footer from '../components/Footer';

const Home = () => {

  return (
    <>
      <TopNavBar />
      <MainNavBar />
      <MessageBar />
      <TopImg />
      <GiftIdeas />
      <NewAirMax />
      <AlwaysIconic />
      <Footer />
    </>
  );
};

export default Home;
