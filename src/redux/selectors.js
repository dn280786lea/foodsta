export const selectTotalFoods = state => state.foods.totalFoods;
export const selectFoods = state => state.foods.foods;
export const selectError = state => state.foods.foods;
export const selectIsLoading = state => state.foods.isLoading;

export const selectCarById = (state, _id) => {
  return state.foods.find(food => food._id === _id);
};

export const selectFavorites = state => state.cars && state.cars.favorites;
