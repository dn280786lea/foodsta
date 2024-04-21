import { createSlice } from '@reduxjs/toolkit';
import { getAllFoods } from './operations';

const initialState = {
  foods: [],
  totalFoods: 0,
  isLoading: false,
  error: null,
};

export const foodsSlice = createSlice({
  name: 'foods',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getAllFoods.pending, state => {
        state.isLoading = true;
      })
      .addCase(getAllFoods.fulfilled, (state, action) => {
        state.isLoading = false;
        console.log(action.payload);
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
