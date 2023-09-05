import { configureStore } from '@reduxjs/toolkit';
import cards from './slices/cardsSlice.js';
import user from './slices/usersSlice.js';
import books from './slices/booksSlice.js';

// import { useDispatch, type TypedUseSelectorHook, useSelector } from "react-redux";



export const store = configureStore({
  reducer: {
    cards, user, books
  },
});

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;

// export const useAppDispatch: () => AppDispatch = useDispatch;
// export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
