import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  books: null,
  booksRead: null
};

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    setBooks(state, action) {
      console.log('action books ===>', action.payload);
      state.books = action.payload;
    },
    setReadBooks(state, action) {
      console.log('action books ===>', action.payload);
      state.books = action.payload;
    },
  },
})

export const { setBooks, setReadBooks } = booksSlice.actions;

export default booksSlice.reducer;
