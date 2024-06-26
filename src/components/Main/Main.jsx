import React, { useState } from 'react';
import './Main.css';
import Right from '../img/icon/Right';
import Left from '../img/icon/Left';
import Table_one from '../img/Table_one.png';
import Table_two from '../img/Table_two.png';
import Table_3 from '../img/Table_3.png';
import Circle from '../Circle/Circle';
import ShowModal from 'components/Form/ShowModal.jsx';

const Main = () => {
  const [currentImage, setCurrentImage] = useState(Table_one);
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    const images = [Table_one, Table_two, Table_3];
    const currentIndex = images.indexOf(currentImage);
    const nextIndex = (currentIndex + 1) % images.length;
    setCurrentImage(images[nextIndex]);
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
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
          <button onClick={openModal} className="bt-menu-title">
            Order Now
          </button>{' '}
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

      {showModal && <ShowModal closeModal={closeModal} />}
    </div>
  );
};

export default Main;
