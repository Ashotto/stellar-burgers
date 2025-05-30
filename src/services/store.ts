import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  TypedUseSelectorHook,
  useDispatch as dispatchHook,
  useSelector as selectorHook
} from 'react-redux';

import userReducer from '../slices/userSlice';
import orderReducer from '../slices/orderSlice';

import modalReducer from '../slices/modalSlice';
import ingredientsReducer from '../slices/ingredientSlice';
import burgerConstructorReducer from '../slices/burgerConstructorSlice';
import feedReducer from '../slices/feedSlice';

export const rootReducer = combineReducers({
  user: userReducer,
  order: orderReducer,
  modal: modalReducer,
  ingredients: ingredientsReducer,
  burgerConstructor: burgerConstructorReducer,
  feed: feedReducer
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production'
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = () => dispatchHook();
export const useAppSelector: TypedUseSelectorHook<RootState> = selectorHook;

export default store;