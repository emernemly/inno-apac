const { createSlice } = require('@reduxjs/toolkit');

const contactSlice = createSlice({
  name: 'contact',
  initialState: {
    oneItem: {},
    items: [],
    loading: false,
    error: null,
  },
  reducers: {
    loadingState(state) {
      state.loading = true;
    },
    hanedError(state, action) {
      state.error = action.payload;
      state.loading = false;
    },
    allContact(state, action) {
      state.items = action.payload;
      state.loading = false;
      state.error = null;
    },
    oneContact(state, action) {
      state.oneItem = action.payload;
      state.loading = false;
      state.error = null;
    },
  },
});
export const { loadingState, allContact, hanedError, oneContact } =
  contactSlice.actions;
export default contactSlice.reducer;
