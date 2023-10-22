import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    items: [],
    item: null,
    loading: false,
    error: null,
  },
  reducers: {
    loadingState(state) {
      state.loading = true;
    },
    signIn(state, action) {
      state.items = action.payload;
      state.loading = false;
      state.error = null;
    },
    handeluser(state, action) {
      state.item = action.payload;
      state.loading = false;
      state.error = null;
    },
    hanedError(state, action) {
      state.error = action.payload;
      state.loading = false;
    },
    logout(state) {
      state.items = [];
      state.item = null;
      state.loading = false;
      state.error = null;
    },
  },
});
export const { loadingState, signIn, hanedError, handeluser, logout } =
  userSlice.actions;
export default userSlice.reducer;
