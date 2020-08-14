const axios = require('axios');
import { AsyncStorage } from 'react-native';
const action = (type, payload) => ({ type, payload });

const type = {
  LOADING_UPDATE_PROFILE: "LOADING_UPDATE_PROFILE",
  LOADED_UPDATE_PROFILE: "LOADED_UPDATE_PROFILE",
  LOADERR_UPDATE_PROFILE: "LOADERR_UPDATE_PROFILE"
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
    case type.LOADING_UPDATE_PROFILE:
      return {
        ...state,
        loading: true,
      };

    case type.LOADED_UPDATE_PROFILE:
      return {
        ...state,
        loading: false,
        data: actions.payload.data,
        error: {
          hasError: false,
          message: '',
        },
      };

    case type.LOADERR_UPDATE_PROFILE:
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

export const Req_User_Update_Profile = (name, avatar, phone) => {
  return async dispatch => {
    dispatch(action(type.LOADING_UPDATE_PROFILE));
    return await axios.put('https://api.itedu.me/user/update-profile', {
      "name": name,
      "avatar": avatar,
      "phone": phone
    }, {
      headers: {
        "Authorization": "Bearer " + await AsyncStorage.getItem('token')
      }
    })
      .then((res) => {
        dispatch(action(type.LOADED_UPDATE_PROFILE, { data: res.data }));
        return res;
      }).catch((err) => {
        dispatch(action(type.LOADERR_UPDATE_PROFILE, { error: err.response }));
        return err.response;
      })
  };
};