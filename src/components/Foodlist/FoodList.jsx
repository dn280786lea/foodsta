import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllFoods } from '../../redux/operations';
import { selectFoods } from '../../redux/selectors';
import { Loader } from '../Loader/Loader';
import './FoodList.css';
import FoodItems from '../FoodItems/FoodItems';

const FoodList = () => {
  const dispatch = useDispatch();
  const foods = useSelector(selectFoods);
  const [displayedFoods, setDisplayedFoods] = useState(6);

  useEffect(() => {
    dispatch(getAllFoods());
  }, [dispatch]);

  const loadMore = () => {
    setDisplayedFoods(prev => prev + 6);
  };

  if (!foods) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  return (
    <div>
      <h2 className="foodlist-title">Some of Our Favorites</h2>
      <p className="foodlist-sub">Looking for something delicious?</p>
      <FoodItems foods={foods.slice(0, displayedFoods)} />
      <div>
        {displayedFoods < foods.length && (
          <button className="loadmore" onClick={loadMore}>
            Load more
          </button>
        )}
      </div>
    </div>
  );
};

export default FoodList;
