import React from 'react';
import './Raiting.css';
import Star from 'components/img/icon/Star';

const Raiting = ({ rating }) => {
  const stars = Array(5)
    .fill(null)
    .map((_, index) => {
      if (index < rating) {
        return <Star key={index} isFilled={true} />;
      } else {
        return <Star key={index} isFilled={false} />;
      }
    });

  return <div className="star-rating">{stars}</div>;
};

export default Raiting;
