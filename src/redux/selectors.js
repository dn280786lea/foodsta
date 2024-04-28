export const selectTotalFoods = state => state.foods.totalFoods;
export const selectFoods = state => state.foods.foods;
export const selectError = state => state.foods.foods;
export const selectIsLoading = state => state.foods.isLoading;

export const selectFoodById = (state, foodId) => {
  return state.foods.foods.find(food => food.id === foodId);
};

export const selectFavorites = state => state.foods && state.foods.favorites;
