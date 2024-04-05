import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    multiply: {
      reducer: (state, action: PayloadAction<number>) => {
        state.value *= action.payload;
      },
      prepare: (value?: number) => ({ payload: value || 2 })
    },
    increment: state => {
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    }
  },
  extraReducers: builder => {
    builder.addMatcher(
      action => action.type === 'RESET_COUNTER',
      () => {
        return initialState;
      }
    );
  }
});

export const { multiply, decrement, increment } = counterSlice.actions;
export default counterSlice.reducer;
