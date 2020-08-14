const axios = require('axios');
const action = (type, payload) => ({ type, payload });

const type = {
  LOADING_COURSE_TOPRATE: "LOADING_COURSE_TOPRATE",
  LOADED_COURSE_TOPRATE: "LOADED_COURSE_TOPRATE",
  LOADERR_COURSE_TOPRATE: "LOADERR_COURSE_TOPRATE"
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
    case type.LOADING_COURSE_TOPRATE:
      return {
        ...state,
        loading: true,
      };

    case type.LOADED_COURSE_TOPRATE:
      return {
        ...state,
        loading: false,
        data: actions.payload.data,
        error: {
          hasError: false,
          message: '',
        },
      };

    case type.LOADERR_COURSE_TOPRATE:
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

export const Req_Course_TopRate = () => {
  return async dispatch => {
    dispatch(action(type.LOADING_COURSE_TOPRATE));
    return await axios.post(`https://api.itedu.me/course/top-rate`, { "limit": 20, "page": 1 },
    ).then((res) => {
      dispatch(action(type.LOADED_COURSE_TOPRATE, { data: res.data.payload }));
      return res;
    }).catch((err) => {
      dispatch(action(type.LOADERR_COURSE_TOPRATE, { error: err.response }));
      return err.response;
    })
  };
};