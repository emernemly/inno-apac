import axios from 'axios';
import { allNews, hanedError, loadingState } from './NewsLetterSlice';

export const allNewsLetter = () => async (dispatch) => {
  try {
    dispatch(loadingState());
    const data = await axios.get(
      'https://inno-apac.onrender.com/api/news-letter',
      {
        withCredentials: true,
      }
    );
    dispatch(allNews(data.data));
  } catch (error) {
    dispatch(hanedError(error.response.data.message));
  }
};
export const deleteNewsLetter = (_id) => async (dispatch) => {
  try {
    dispatch(loadingState());
    await axios.delete(
      `https://inno-apac.onrender.com/api/news-letter/${_id}`,
      {
        withCredentials: true,
      }
    );
    dispatch(allNewsLetter());
  } catch (error) {
    dispatch(hanedError(error.response.data.message));
  }
};
