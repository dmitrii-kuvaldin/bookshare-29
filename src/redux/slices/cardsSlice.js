import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  items: []
};

export const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
  },
})

export const { setItems } = cardsSlice.actions;

export default cardsSlice.reducer;
