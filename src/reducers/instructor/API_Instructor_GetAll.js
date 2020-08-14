const axios = require('axios');
import { AsyncStorage } from 'react-native';
const action = (type, payload) => ({ type, payload });

const type = {
  LOADING_INSTRUCTOR_GETALL: "LOADING_INSTRUCTOR_GETALL",
  LOADED_INSTRUCTOR_GETALL: "LOADED_INSTRUCTOR_GETALL",
  LOADERR_INSTRUCTOR_GETALL: "LOADERR_INSTRUCTOR_GETALL"
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
    case type.LOADING_INSTRUCTOR_GETALL:
      return {
        ...state,
        loading: true,
      };

    case type.LOADED_INSTRUCTOR_GETALL:
      return {
        ...state,
        loading: false,
        data: actions.payload.data.payload,
        error: {
          hasError: false,
          message: '',
        },
      };

    case type.LOADERR_INSTRUCTOR_GETALL:
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

export const Req_Instructor_GetAll = () => {
  return async dispatch => {
    dispatch(action(type.LOADING_INSTRUCTOR_GETALL));
    return await axios.get('https://api.itedu.me/instructor')
      .then((res) => {
        dispatch(action(type.LOADED_INSTRUCTOR_GETALL, { data: res.data }));
        return res;
      }).catch((err) => {
        dispatch(action(type.LOADERR_INSTRUCTOR_GETALL, { error: err.response }));
        return err.response;
      })
  };
};