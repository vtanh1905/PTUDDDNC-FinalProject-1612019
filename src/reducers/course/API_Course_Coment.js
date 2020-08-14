const axios = require('axios');
import { AsyncStorage } from 'react-native';
const action = (type, payload) => ({ type, payload });

const type = {
  LOADING_COMMENT_COURSE: "LOADING_COMMENT_COURSE",
  LOADED_COMMENT_COURSE: "LOADED_COMMENT_COURSE",
  LOADERR_COMMENT_COURSE: "LOADERR_COMMENT_COURSE"
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
    case type.LOADING_COMMENT_COURSE:
      return {
        ...state,
        loading: true,
      };

    case type.LOADED_COMMENT_COURSE:
      return {
        ...state,
        loading: false,
        data: actions.payload.data,
        error: {
          hasError: false,
          message: '',
        },
      };

    case type.LOADERR_COMMENT_COURSE:
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

export const Req_Comment_Course = (courseId, countRating, content) => {
  return async dispatch => {
    dispatch(action(type.LOADING_COMMENT_COURSE));
    return await axios.post('https://api.itedu.me/course/rating-course', { courseId: courseId, formalityPoint: countRating, contentPoint: countRating, presentationPoint: countRating, content: content }, {
      headers: {
        "Authorization": "Bearer " + await AsyncStorage.getItem('token')
      }
    })
      .then((res) => {
        dispatch(action(type.LOADED_COMMENT_COURSE, { data: res.data }));
        return res;
      }).catch((err) => {
        dispatch(action(type.LOADERR_COMMENT_COURSE, { error: err.response }));
        return err.response;
      })
  };
};