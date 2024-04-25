import React, { useState } from 'react';
import './FoodItems.css';
import DetailItems from '../DetailItems/DetailItems';

const FoodItems = ({ foods }) => {
  const [detailModalVisible, setDetailModalVisible] = useState(false);
  const [selectedFoodId, setSelectedFoodId] = useState(null);

  const openModal = foodId => {
    setDetailModalVisible(true);
    setSelectedFoodId(foodId);
  };

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
              <button onClick={() => openModal(food.id)} className="show_more">
                Show more
              </button>
            </li>
          </ul>
        </div>
      ))}
      {detailModalVisible && (
        <DetailItems
          closeModal={() => setDetailModalVisible(false)}
          foodId={selectedFoodId}
        />
      )}
    </div>
  );
};

export default FoodItems;
