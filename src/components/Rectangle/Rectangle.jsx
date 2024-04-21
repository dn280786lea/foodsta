import React from 'react';
import './Rectangle.css';
import rectangleImage from '../img/rectangleImage.png';
import apple from '../img/aple.png';
import Circle from '../Circle/Circle';
import Fast from 'components/img/icon/Fast';
import Easy from 'components/img/icon/Easy';

const RectangleComponent = () => {
  return (
    <div className="rectangle">
      <img src={rectangleImage} alt="rectangle" />
      <div className="circle-rectangle">
        <Circle>
          <img className="apple" src={apple} alt="apple" />
        </Circle>
      </div>
      <div className="text">
        <h2 className="rectangle-title">What’s Special About Our Offerings</h2>
        <p className="rectangle-sub">
          With our platform, you can browse through a diverse selection of
          cuisines and local restaurants, and choose from a variety of dishes
          that cater to your specific taste buds.
        </p>
        <ul className="rectangle-block">
          <li className="rectangle-fast">
            <div className="rectangle-circle">
              <Fast />
            </div>
            <h3 className="rectangle-fast-title">Fasest Delivery</h3>
            <p className="rectangle-fast-sub">
              Our advanced logistics system and dedicated delivery partners
              ensure that your meals are delivered to you within 30-minutes.
            </p>
          </li>
          <li>
            <div className="rectangle-circle">
              <Easy />
            </div>
            <h3 className="rectangle-fast-title">Easy To Order</h3>
            <p className="rectangle-fast-sub">
              You can browse through a wide variety of cuisines and restaurants,
              select your favorite meals, and place your order in just a few
              clicks.
            </p>
          </li>
        </ul>
        <button className="rectangle-btn">Order Now</button>
      </div>
    </div>
  );
};

export default RectangleComponent;
