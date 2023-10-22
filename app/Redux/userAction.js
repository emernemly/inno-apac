const { default: axios } = require('axios');
const {
  signIn,
  loadingState,
  hanedError,
  handeluser,
  logout,
} = require('./slice');

export const userdata = (data, navigate) => async (dispatch) => {
  try {
    dispatch(loadingState());
    const datas = await axios.post(
      'https://inno-apac.onrender.com/api/auth',
      data,
      {
        withCredentials: 'include',
      }
    );
    dispatch(signIn(datas));
    navigate.push('/Mangement/Setting/SettingBLog');
  } catch (error) {
    console.log(error);
    dispatch(hanedError(error.response.data.message));
  }
};
export const userverify = () => async (dispatch) => {
  try {
    const datas = await axios.get('https://inno-apac.onrender.com/api/auth', {
      withCredentials: 'include',
    });
    dispatch(handeluser(datas));
  } catch (error) {
    dispatch(hanedError(error.response.data.message));
    console.log(error);
  }
};
export const userLogout = (navigate) => async (dispatch) => {
  try {
    dispatch(loadingState());
    await axios.get('https://inno-apac.onrender.com/api/auth/logout', {
      withCredentials: 'include',
    });
    dispatch(logout());
    navigate.push('/Mangement/SignIn');
  } catch (error) {
    console.log(error);
    dispatch(hanedError(error.response.data.message));
  }
};
