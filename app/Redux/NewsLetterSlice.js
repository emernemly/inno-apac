const { createSlice } = require('@reduxjs/toolkit');

const NewsLetterSlice = createSlice({
  name: 'newsLetter',
  initialState: {
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
    allNews(state, action) {
      state.loading = false;
      state.items = action.payload;
      state.error = null;
    },
  },
});
export const { loadingState, hanedError, allNews } = NewsLetterSlice.actions;
export default NewsLetterSlice.reducer;
