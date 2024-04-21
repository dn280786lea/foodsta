import React, { useState } from 'react';
import './Main.css';
import Right from '../img/icon/Right';
import Left from '../img/icon/Left';
import Table_one from '../img/Table_one.png';
import Table_two from '../img/Table_two.png';
import Table_3 from '../img/Table_3.png';
import RectangleComponent from '../Rectangle/Rectangle';
import Circle from '../Circle/Circle';
import FoodList from 'components/Foodlist/FoodList';

const Main = () => {
  const [currentImage, setCurrentImage] = useState(Table_one);

  const handleClick = () => {
    const images = [Table_one, Table_two, Table_3];
    const currentIndex = images.indexOf(currentImage);
    const nextIndex = (currentIndex + 1) % images.length;
    setCurrentImage(images[nextIndex]);
  };

  return (
    <div className="main">
      <div className="top">
        <div className="main-title">
          <h1 className="title">Enjoy Your Favorite Food From Anywhere</h1>
          <p className="subscribe">
            With just a few clicks, you can have your favorite meals delivered
            straight to your doorstep, no matter where you are. Order now and
            enjoy a hassle-free and delicious meal from the comfort of your own
            home.
          </p>
          <button className="bt-menu-title" to="/">
            Order Now
          </button>
        </div>
        <Circle>
          <div className="circle">
            <button className="bt-left" onClick={handleClick}>
              <Left />
            </button>
            <div className="circle-content">
              <img className="table" src={currentImage} alt="Table" />
            </div>
            <button className="bt-right" onClick={handleClick}>
              <Right />
            </button>
          </div>
        </Circle>
      </div>
      <RectangleComponent />
      <FoodList />
    </div>
  );
};

export default Main;
