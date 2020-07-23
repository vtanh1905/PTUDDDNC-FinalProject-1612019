const axios = require('axios');
import { AsyncStorage } from 'react-native';
const action = (type, payload) => ({ type, payload });

const type = {
  LOADING_COURSE_GETDETAIL: "LOADING_COURSE_GETDETAIL",
  LOADED_COURSE_GETDETAIL: "LOADED_COURSE_GETDETAIL",
  LOADERR_COURSE_GETDETAIL: "LOADERR_COURSE_GETDETAIL"
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
    case type.LOADING_COURSE_GETDETAIL:
      return {
        ...state,
        loading: true,
      };

    case type.LOADED_COURSE_GETDETAIL:
      return {
        ...state,
        loading: false,
        data: actions.payload.data.payload,
        error: {
          hasError: false,
          message: '',
        },
      };

    case type.LOADERR_COURSE_GETDETAIL:
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

export const Req_Course_GetDetail = (courseID, userID) => {
  return async dispatch => {
    dispatch(action(type.LOADING_COURSE_GETDETAIL));
    return await axios.get(`https://api.itedu.me/course/get-course-detail/${courseID}/${userID}`)
      .then((res) => {
        dispatch(action(type.LOADED_COURSE_GETDETAIL, { data: res.data }));
        return res;
      }).catch((err) => {
        dispatch(action(type.LOADERR_COURSE_GETDETAIL, { error: err.response }));
        return err.response;
      })
  };
};