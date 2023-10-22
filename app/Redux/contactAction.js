import axios from 'axios';
import { allContact, hanedError, loadingState } from './contactSlice';

export const getAll = () => async (dispatch) => {
  try {
    dispatch(loadingState());
    const data = await axios.get('https://inno-apac.onrender.com/api/contact', {
      withCredentials: true,
    });
    dispatch(allContact(data.data));
  } catch (error) {
    console.log(error);
    dispatch(hanedError(error.response.data.message));
  }
};
export const deleteContact = (_id) => async (dispatch) => {
  try {
    dispatch(loadingState());
    await axios.delete(`https://inno-apac.onrender.com/api/contact/${_id}`, {
      withCredentials: true,
    });
    dispatch(getAll());
  } catch (error) {
    console.log(error);
    dispatch(hanedError(error.response.data.message));
  }
};
