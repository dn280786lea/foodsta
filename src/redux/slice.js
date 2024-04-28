import { createSlice } from '@reduxjs/toolkit';
import { getAllFoods } from './operations';

const loadFavoritesFromLocalStorage =
  JSON.parse(localStorage.getItem('favorites')) || [];

const initialState = {
  foods: [],
  totalFoods: 0,
  isLoading: false,
  error: null,
  favorites: loadFavoritesFromLocalStorage,
};

export const foodsSlice = createSlice({
  name: 'foods',
  initialState,
  reducers: {
    addToFavorites(state, { payload }) {
      state.favorites.push(payload);
      localStorage.setItem('favorites', JSON.stringify(state.favorites));
    },
    removeFromFavorites(state, { payload }) {
      state.favorites = state.favorites.filter(food => food.id !== payload);
      localStorage.setItem('favorites', JSON.stringify(state.favorites));
    },
    clearFavorites(state) {
      state.favorites = [];
      localStorage.removeItem('favorites');
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getAllFoods.pending, state => {
        state.isLoading = true;
      })
      .addCase(getAllFoods.fulfilled, (state, action) => {
        state.isLoading = false;
        state.foods = action.payload;
        state.totalFoods = action.payload.length;
        state.error = null;
      })
      .addCase(getAllFoods.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const foodsReducer = foodsSlice.reducer;
export const { addToFavorites, removeFromFavorites, clearFavorites } =
  foodsSlice.actions;
