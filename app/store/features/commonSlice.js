import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  step: 1,
  informationQuestions : [],
  dataQuestions: []
};

export const page1Request = createAsyncThunk(
  'common/page1Request',
  async (userInput, thunkAPI) => {
    try {
      const response = await axios.post('http://localhost:3000/pages/page1', {
        userInput: userInput
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const page2Request = createAsyncThunk(
  'common/page2Request',
  async (values, thunkAPI) => {
    try {
      const response = await axios.post('http://localhost:3000/pages/page2', {
        id: values.id,
        response: values.response
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    nextStep: (state, action) => {
      state.step = state.step + 1;
    },
    prevStep: (state, action) => {
      state.step = state.step - 1;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(page1Request.fulfilled, (state, action) => {
        state.informationQuestions = action.payload;
      })
      .addCase(page2Request.fulfilled, (state, action) => {
        state.informationQuestions = action.payload;
      })
  }
});

// Aksiyonları export et
export const { nextStep, prevStep } = commonSlice.actions;

export default commonSlice.reducer;