import React from 'react';
import Main from '../components/Main/Main';
import './HomePage.css';
import RectangleComponent from '../components/Rectangle/Rectangle';
import FoodList from '../components/Foodlist/FoodList';
import Reviews from '../components/Reviews/Reviews';
import Subscribe from '../components/Subscribe/Subscribe';

const Home = () => {
  return (
    <div>
      <Main />
      <RectangleComponent />
      <FoodList />
      <Reviews />
      <Subscribe />
    </div>
  );
};

export default Home;
