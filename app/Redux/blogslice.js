const { createSlice } = require('@reduxjs/toolkit');

const blogSlice = createSlice({
  name: 'blog',
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
    allBlog(state, action) {
      state.items = action.payload;
      state.loading = false;
      state.error = null;
    },
    oneBlog(state, action) {
      state.oneItem = action.payload;
      state.loading = false;
      state.error = null;
    },
  },
});
export const { loadingState, allBlog, hanedError, oneBlog } = blogSlice.actions;
export default blogSlice.reducer;
