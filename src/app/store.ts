import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { masterDropDownApi } from '../api/dropDownRtkQ';
import counterReducer from '../features/counter/counterSlice';


export const store = configureStore({
  reducer: {
    counter: counterReducer,


    [masterDropDownApi.reducerPath]: masterDropDownApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(masterDropDownApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
