const axios = require('axios');
import { AsyncStorage } from 'react-native';
const action = (type, payload) => ({ type, payload });

const type = {
  LOADING_ME: "LOADING_ME",
  LOADED_ME: "LOADED_ME",
  LOADERR_ME: "LOADERR_ME"
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
    case type.LOADING_ME:
      return {
        ...state,
        loading: true,
      };

    case type.LOADED_ME:
      return {
        ...state,
        loading: false,
        data: actions.payload.data,
        error: {
          hasError: false,
          message: '',
        },
      };

    case type.LOADERR_ME:
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

export const Req_User_Me = () => {
  return async dispatch => {
    console.log(await AsyncStorage.getItem('token'));
    dispatch(action(type.LOADING_ME));
    return await axios.get('https://api.itedu.me/user/me', {
      headers: {
        "Authorization": "Bearer " + await AsyncStorage.getItem('token')
      }
    })
      .then((res) => {
        dispatch(action(type.LOADED_ME, { data: res.data }));
        return res;
      }).catch((err) => {
        dispatch(action(type.LOADERR_ME, { error: err.response }));
        return err.response;
      })
  };
};