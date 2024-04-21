import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getAllFoods = createAsyncThunk(
  'foods/getAllFoods',
  async (_, thunkApi) => {
    try {
      const response = await axios.get(
        'https://65f98457df1514524611d93d.mockapi.io/adverts/food'
      );
      console.log(response);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
