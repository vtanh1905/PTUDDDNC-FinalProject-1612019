const axios = require('axios');
import { AsyncStorage } from 'react-native';
const action = (type, payload) => ({ type, payload });

const type = {
  LOADING_COURSE_NEWREALEASE: "LOADING_COURSE_NEWREALEASE",
  LOADED_COURSE_NEWREALEASE: "LOADED_COURSE_NEWREALEASE",
  LOADERR_COURSE_NEWREALEASE: "LOADERR_COURSE_NEWREALEASE"
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
    case type.LOADING_COURSE_NEWREALEASE:
      return {
        ...state,
        loading: true,
      };

    case type.LOADED_COURSE_NEWREALEASE:
      return {
        ...state,
        loading: false,
        data: actions.payload.data,
        error: {
          hasError: false,
          message: '',
        },
      };

    case type.LOADERR_COURSE_NEWREALEASE:
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

export const Req_Course_NewRealease = (userID) => {
  return async dispatch => {
    dispatch(action(type.LOADING_COURSE_NEWREALEASE));
    return await axios.get(`https://api.itedu.me/user/recommend-course/${userID}/20/1`)
      .then((res) => {
        dispatch(action(type.LOADED_COURSE_NEWREALEASE, { data: res.data.payload }));
        return res;
      }).catch((err) => {
        dispatch(action(type.LOADERR_COURSE_NEWREALEASE, { error: err.response }));
        return err.response;
      })
  };
};