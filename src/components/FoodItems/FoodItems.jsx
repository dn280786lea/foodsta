import React from 'react';
import './FoodItems.css';

const FoodItems = ({ foods }) => {
  return (
    <div className="wrapper">
      {foods.map(food => (
        <div className="catalog-foods" key={food.id}>
          <ul className="catalog-food">
            <li className="image-container">
              <div className="food_items-title">
                <h2 className="title-food">{food.name},</h2>
                <h2 className="title-price">
                  {food.price} {food.currency}
                </h2>
                <p className="title-rating">{food.rating.toFixed(1)}</p>
              </div>
              <img className="food-photo" src={food.galery} alt={food.name} />

              <p className="description">{food.description}</p>
              <button className="show_more">Show more</button>
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default FoodItems;
