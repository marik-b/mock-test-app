import { createSlice } from '@reduxjs/toolkit'
import {Cart} from '@/app/utils/types';

// Define the initial state using that type
const initialState: Cart[] = [];

export const cartSlice = createSlice({
  name: 'cart',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {},
});

export const { } = cartSlice.actions;

export default cartSlice.reducer;