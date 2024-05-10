import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Close from 'components/img/icon/Close';
import DetailItems from '../DetailItems/DetailItems';
import FoodItems from '../FoodItems/FoodItems';
import { addToBasket } from '../../redux/addbacket/slice';

const AddBacket = ({ closeModal }) => {
  const [backetModal, setBacketModal] = useState(false);
  const [selectedFoodId] = useState(null);

  const basket = useSelector(state => state.basket);
  const foods = useSelector(state => state.foods);
  const dispatch = useDispatch();

  const handleAddToBasket = () => {
    if (selectedFoodId) {
      const food = foods.find(food => food.id === selectedFoodId);
      if (food) {
        dispatch(
          addToBasket({
            id: food.id,
            name: food.name,
            count: 1,
            totalPrice: food.price,
          })
        );
      }
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-help">
        <form className="help-form">
          <button type="button" className="close-button" onClick={closeModal}>
            <Close />
          </button>
          <div>
            {basket && basket.length > 0 ? (
              <div>
                <FoodItems foods={basket} />
                console.log('Basket:', basket);
              </div>
            ) : (
              <p>No items in the basket.</p>
            )}
          </div>
        </form>
      </div>
      {backetModal && (
        <DetailItems
          closeModal={() => setBacketModal(false)}
          foodId={selectedFoodId}
          handleAddToBasket={handleAddToBasket}
        />
      )}
    </div>
  );
};

export default AddBacket;
