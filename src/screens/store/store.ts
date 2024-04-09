import {configureStore} from '@reduxjs/toolkit';
import counterReducer from '../Lab6_Bai1/counter';
import {setupListeners} from '@reduxjs/toolkit/query';
import { pokemonApi } from '../Lab6_Bai2/pokemon';
import { userApi } from '../Lab6_Bai3/user';


export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [pokemonApi.reducerPath]: pokemonApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(pokemonApi.middleware, userApi.middleware),
});
setupListeners(store.dispatch);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;