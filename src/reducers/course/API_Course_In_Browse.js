const axios = require('axios');
import { AsyncStorage } from 'react-native';
const action = (type, payload) => ({ type, payload });

const type = {
  LOADING_COURSE_IN_BROWSE: "LOADING_COURSE_IN_BROWSE",
  LOADED_COURSE_IN_BROWSE: "LOADED_COURSE_IN_BROWSE",
  LOADERR_COURSE_IN_BROWSE: "LOADERR_COURSE_IN_BROWSE"
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
    case type.LOADING_COURSE_IN_BROWSE:
      return {
        ...state,
        loading: true,
      };

    case type.LOADED_COURSE_IN_BROWSE:
      return {
        ...state,
        loading: false,
        data: actions.payload.data,
        error: {
          hasError: false,
          message: '',
        },
      };

    case type.LOADERR_COURSE_IN_BROWSE:
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

export const Req_Course_In_Browse = (userID, typeCourse) => {
  if (typeCourse === "New Releases") {
    return async dispatch => {
      dispatch(action(type.LOADING_COURSE_IN_BROWSE));
      return await axios.post(`https://api.itedu.me/course/top-new`, { "limit": 20, "page": 1 },
      ).then((res) => {
        dispatch(action(type.LOADED_COURSE_IN_BROWSE, { data: res.data.payload }));
        return res;
      }).catch((err) => {
        dispatch(action(type.LOADERR_COURSE_IN_BROWSE, { error: err.response }));
        return err.response;
      })
    };
  } else if (typeCourse === "Recommend") {
    return async dispatch => {
      dispatch(action(type.LOADING_COURSE_IN_BROWSE));
      return await axios.get(`https://api.itedu.me/user/recommend-course/${userID}/20/1`)
        .then((res) => {
          dispatch(action(type.LOADED_COURSE_IN_BROWSE, { data: res.data.payload }));
          return res;
        }).catch((err) => {
          dispatch(action(type.LOADERR_COURSE_IN_BROWSE, { error: err.response }));
          return err.response;
        })
    };
  } else if (typeCourse === "Best Seller") {
    return async dispatch => {
      dispatch(action(type.LOADING_COURSE_IN_BROWSE));
      return await axios.post(`https://api.itedu.me/course/top-sell`, { "limit": 20, "page": 1 },
      ).then((res) => {
        dispatch(action(type.LOADED_COURSE_IN_BROWSE, { data: res.data.payload }));
        return res;
      }).catch((err) => {
        dispatch(action(type.LOADERR_COURSE_IN_BROWSE, { error: err.response }));
        return err.response;
      })
    };
  } else {
    return async dispatch => {
      dispatch(action(type.LOADING_COURSE_IN_BROWSE));
      return await axios.post(`https://api.itedu.me/course/top-rate`, { "limit": 20, "page": 1 },
      ).then((res) => {
        dispatch(action(type.LOADED_COURSE_IN_BROWSE, { data: res.data.payload }));
        return res;
      }).catch((err) => {
        dispatch(action(type.LOADERR_COURSE_IN_BROWSE, { error: err.response }));
        return err.response;
      })
    };
  }


};