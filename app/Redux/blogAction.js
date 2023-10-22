import axios from 'axios';
import { allBlog, hanedError, loadingState, oneBlog } from './blogslice';

export const addBlog =
  ({ img, title, description }) =>
  async (dispatch) => {
    const data = new FormData();
    data.append('img', img);
    data.append('title', title);
    data.append('description', description);
    try {
      dispatch(loadingState());
      const datas = await axios.post(
        'https://inno-apac.onrender.com/api/blog',
        data,
        {
          withCredentials: true,
        }
      );
      dispatch(getblog());
    } catch (error) {
      dispatch(hanedError(error.response.data.message));
    }
  };
export const getblog = () => async (dispatch) => {
  try {
    dispatch(loadingState());
    const data = await axios.get('https://inno-apac.onrender.com/api/blog', {
      withCredentials: true,
    });

    dispatch(allBlog(data.data));
  } catch (error) {
    dispatch(hanedError(error.response.data.message));
  }
};
export const getblogByid = (_id) => async (dispatch) => {
  try {
    dispatch(loadingState());
    const data = await axios.get(
      `https://inno-apac.onrender.com/api/blog/${_id}`,
      {
        withCredentials: true,
      }
    );

    dispatch(oneBlog(data.data));
  } catch (error) {
    dispatch(hanedError(error.response.data.message));
  }
};
export const deleteblog = (_id) => async (dispatch) => {
  try {
    dispatch(loadingState());
    await axios.delete(`https://inno-apac.onrender.com/api/blog/${_id}`, {
      withCredentials: true,
    });
    dispatch(getblog());
  } catch (error) {
    console.log(error);
    dispatch(hanedError(error.response.data.message));
  }
};
