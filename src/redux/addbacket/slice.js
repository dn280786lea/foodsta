import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.push(action.payload);
    },
    removeFromBasket: (state, action) => {
      return state.filter(item => item.id !== action.payload);
    },
    clearBasket: () => {
      return [];
    },
  },
});

export const { addToBasket, removeFromBasket, clearBasket } =
  basketSlice.actions;

export default basketSlice.reducer;
