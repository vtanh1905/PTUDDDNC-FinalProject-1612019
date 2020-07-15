const axios = require('axios');
import { AsyncStorage } from 'react-native';
const action = (type, payload) => ({ type, payload });

const type = {
  LOADING_CHANGE_PASS: "LOADING_CHANGE_PASS",
  LOADED_CHANGE_PASS: "LOADED_CHANGE_PASS",
  LOADERR_CHANGE_PASS: "LOADERR_CHANGE_PASS"
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
    case type.LOADING_CHANGE_PASS:
      return {
        ...state,
        loading: true,
      };

    case type.LOADED_CHANGE_PASS:
      return {
        ...state,
        loading: false,
        data: actions.payload.data,
        error: {
          hasError: false,
          message: '',
        },
      };

    case type.LOADERR_CHANGE_PASS:
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

export const Req_User_Change_Pass = (id, oldPass, newPass) => {
  return async dispatch => {
    dispatch(action(type.LOADING_CHANGE_PASS));
    return await axios.post('https://api.itedu.me/user/change-password',
      {
        "id": id,
        "oldPass": oldPass,
        "newPass": newPass
      },
      {
        headers: {
          "Authorization": "Bearer " + await AsyncStorage.getItem('token')
        }
      }
    ).then((res) => {
      dispatch(action(type.LOADED_CHANGE_PASS, { data: res.data }));
      return res;
    }).catch((err) => {
      dispatch(action(type.LOADERR_CHANGE_PASS, { error: err.response }));
      return err.response;
    })
  };
};