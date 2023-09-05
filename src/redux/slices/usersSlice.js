import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  user: null
};

export const usersSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      console.log('action user ===>', action.payload);
      state.user = action.payload;
    },
  },
})

export const { setUser } = usersSlice.actions;

export default usersSlice.reducer;
