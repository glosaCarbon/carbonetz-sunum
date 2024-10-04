import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  step: 1
};

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
});

// Aksiyonları export et
export const { nextStep, prevStep } = commonSlice.actions;

export default commonSlice.reducer;