import React, { useState } from 'react';
import './DetailItems.css';
import Close from '../img/icon/Close';
import { useSelector } from 'react-redux';
import { selectFoodById } from '../../redux/selectors';
import Heart from '../img/icon/Heart';
import Delete from 'components/img/icon/Delete';
import Plus from 'components/img/icon/Plus';

const DetailItems = ({ closeModal, foodId }) => {
  const food = useSelector(state => selectFoodById(state, foodId));

  const handleSubmit = event => {
    event.preventDefault();
  };
  const [count, setCount] = useState(1);
  const [totalPrice, setTotalPrice] = useState(food.price * count);

  const increment = () => {
    const newCount = count + 1;
    setCount(newCount);
    setTotalPrice(newCount * food.price);
  };

  const decrement = () => {
    if (count > 1) {
      const newCount = count - 1;
      setCount(newCount);
      setTotalPrice(newCount * food.price);
    }
  };

  return (
    <div className="food-modal-overlay">
      <div className="food-modal-help">
        <form onSubmit={handleSubmit} className="food-help-form">
          <button
            type="button"
            className="food-close-button"
            onClick={closeModal}
          >
            <Close />
          </button>
          {food && (
            <>
              <div className="food-wrapper">
                <div className="food-detail">
                  <h2 className="food-title">{food.name}</h2>
                  <p className="food-price">
                    Price: {food.price} {food.currency}
                  </p>
                  <p className="food-rating">
                    Rating: {food.rating.toFixed(1)}
                  </p>
                  <button className="heart">
                    <Heart />
                  </button>
                </div>
                <div className="food-detail-main">
                  <div className="food-image">
                    <img
                      src={food.galery}
                      alt={food.name}
                      className="food-detail-photo"
                    />
                  </div>
                  <div className="food-description">
                    <p className="food-ingr">
                      <span className="food-change">Description</span>:{' '}
                      {food.description}
                    </p>
                    <ol className="food-description">
                      <p className="food-ingr">
                        <span className="food-change">Ingredients:</span>
                      </p>
                      {food.ingredients.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                      ))}
                    </ol>
                  </div>
                </div>
              </div>
            </>
          )}
          <div className="add-basket">
            <div className="add-basket-wrapper">
              <div className="add-button">
                <button className="add-delete" onClick={decrement}>
                  <Delete />
                </button>
                <div className="add-count">{count}</div>

                <button className="add-plus" onClick={increment}>
                  <Plus />
                </button>
              </div>
              <button className="basket-btn">
                Add to basket {totalPrice.toFixed(2)} {food.currency}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DetailItems;
