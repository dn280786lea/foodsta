import React from 'react';
import './Reviews.css';
import rectangleImage from '../img/rectangleImage.png';
import Raiting from 'components/Raiting/Raiting';

const Reviews = ({ foods }) => {
  return (
    <div className="rectangle-reviews">
      <img className="rectangle-image" src={rectangleImage} alt="rectangle" />
      <div className="reviews-opinion">
        <h2 className="reviews-title">What our Customers Say</h2>
        <p className="reviews-sub">
          Don't just take our word for it - see what our satisfied customers
          have to say.
        </p>
      </div>
      <div className="form-review">
        <ul className="text-review-ul">
          <li className="text-review">
            <Raiting />
            <p className="text-sub">
              “The Best app I have used to order food in a while, so many
              options to choose from too, I would recommend to a freind, No
              questions asked”
            </p>
          </li>
          <li className="text-review">
            <Raiting />
            <p className="text-sub">
              “The ease with which I can just go in and order what i want was
              amazing, It has been a very pleasant experience ordering from this
              app”
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Reviews;
