import { configureStore } from '@reduxjs/toolkit';
import commonReducer from './features/commonSlice';

export const store = configureStore({
  reducer: {
    common: commonReducer
  },
});