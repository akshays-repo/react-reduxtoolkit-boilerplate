import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';

export interface FarmerCreationState {
  value: number;
  status: 'idle' | 'loading' | 'failed';
}

const initialState: FarmerCreationState = {
  value: 0,
  status: 'idle',
};

export const incrementAsync = createAsyncThunk(
  'counter/fetchCount',
  async (amount: number) => {}
);

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(incrementAsync.fulfilled, (state, action) => {
        state.status = 'idle';
      });
  },
});

export const { increment } = counterSlice.actions;

export const selectCount = (state: RootState) => state.counter.value;

const counterSliceReducer = counterSlice.reducer;

export default counterSliceReducer;
