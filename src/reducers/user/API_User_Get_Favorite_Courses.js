const axios = require('axios');
import { AsyncStorage } from 'react-native';
const action = (type, payload) => ({ type, payload });

const type = {
  LOADING_USER_GET_FAVORITE_COURES: "LOADING_USER_GET_FAVORITE_COURES",
  LOADED_USER_GET_FAVORITE_COURES: "LOADED_USER_GET_FAVORITE_COURES",
  LOADERR_USER_GET_FAVORITE_COURES: "LOADERR_USER_GET_FAVORITE_COURES"
}

const initialStates = {
  data: null,
  loading: false,
  error: {
    hasError: false,
    message: '',
    status: 0
  },
};

export default function reducer(state = initialStates, actions) {
  switch (actions.type) {
    case type.LOADING_USER_GET_FAVORITE_COURES:
      return {
        ...state,
        loading: true,
      };

    case type.LOADED_USER_GET_FAVORITE_COURES:
      return {
        ...state,
        loading: false,
        data: actions.payload.data,
        error: {
          hasError: false,
          message: '',
        },
      };

    case type.LOADERR_USER_GET_FAVORITE_COURES:
      return {
        ...state,
        loading: false,
        error: {
          hasError: true,
          message: actions.payload.error.data.message,
        },
      };
    default:
      return state;
  }
}

export const Req_User_Get_Favorite_Courses = () => {
  return async dispatch => {
    dispatch(action(type.LOADING_USER_GET_FAVORITE_COURES));
    return await axios.get(`https://api.itedu.me/user/get-favorite-courses`, {
      headers: {
        "Authorization": "Bearer " + await AsyncStorage.getItem('token')
      }
    })
      .then((res) => {
        dispatch(action(type.LOADED_USER_GET_FAVORITE_COURES, { data: res.data }));
        return res;
      }).catch((err) => {
        dispatch(action(type.LOADERR_USER_GET_FAVORITE_COURES, { error: err.response }));
        return err.response;
      })
  };
};