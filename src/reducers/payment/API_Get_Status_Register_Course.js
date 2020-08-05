const axios = require('axios');
import { AsyncStorage } from 'react-native';
const action = (type, payload) => ({ type, payload });

const type = {
  LOADING_GET_STATUS_REGISTER_COURSE: "LOADING_GET_STATUS_REGISTER_COURSE",
  LOADED_GET_STATUS_REGISTER_COURSE: "LOADED_GET_STATUS_REGISTER_COURSE",
  LOADERR_GET_STATUS_REGISTER_COURSE: "LOADERR_GET_STATUS_REGISTER_COURSE"
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
    case type.LOADING_GET_STATUS_REGISTER_COURSE:
      return {
        ...state,
        loading: true,
      };

    case type.LOADED_GET_STATUS_REGISTER_COURSE:
      return {
        ...state,
        loading: false,
        data: actions.payload.data,
        error: {
          hasError: false,
          message: '',
        },
      };

    case type.LOADERR_GET_STATUS_REGISTER_COURSE:
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

export const Req_Get_Status_Register_Course = (courseId) => {
  return async dispatch => {
    dispatch(action(type.LOADING_GET_STATUS_REGISTER_COURSE));
    return await axios.get(`https://api.itedu.me/payment/get-course-info/${courseId}`, {
      headers: {
        "Authorization": "Bearer " + await AsyncStorage.getItem('token')
      }
    })
      .then((res) => {
        dispatch(action(type.LOADED_GET_STATUS_REGISTER_COURSE, { data: res.data }));
        return res;
      }).catch((err) => {
        dispatch(action(type.LOADERR_GET_STATUS_REGISTER_COURSE, { error: err.response }));
        return err.response;
      })
  };
};