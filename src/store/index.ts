import { configureStore } from '@reduxjs/toolkit';

import counterReducer, { CounterState } from './counterReducer';

// Define the shape of your state
export interface RootState {
  counter: CounterState;
}

// Combine all reducers into a root reducer
const rootReducer = {
  reducer: {
    counter: counterReducer,
  },
};

// Create the Redux store
const store = configureStore(rootReducer);

export default store;
