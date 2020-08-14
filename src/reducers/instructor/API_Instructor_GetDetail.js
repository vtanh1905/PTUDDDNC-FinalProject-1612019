const axios = require('axios');
const action = (type, payload) => ({ type, payload });

const type = {
  LOADING_INSTRUCTOR_GETDETAIL: "LOADING_INSTRUCTOR_GETDETAIL",
  LOADED_INSTRUCTOR_GETDETAIL: "LOADED_INSTRUCTOR_GETDETAIL",
  LOADERR_INSTRUCTOR_GETDETAIL: "LOADERR_INSTRUCTOR_GETDETAIL"
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
    case type.LOADING_INSTRUCTOR_GETDETAIL:
      return {
        ...state,
        loading: true,
      };

    case type.LOADED_INSTRUCTOR_GETDETAIL:
      return {
        ...state,
        loading: false,
        data: actions.payload.data.payload,
        error: {
          hasError: false,
          message: '',
        },
      };

    case type.LOADERR_INSTRUCTOR_GETDETAIL:
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

export const Req_Instructor_GetDetail = (id) => {
  return async dispatch => {
    dispatch(action(type.LOADING_INSTRUCTOR_GETDETAIL));
    return await axios.get(`https://api.itedu.me/instructor/detail/${id}`)
      .then((res) => {
        dispatch(action(type.LOADED_INSTRUCTOR_GETDETAIL, { data: res.data }));
        return res;
      }).catch((err) => {
        dispatch(action(type.LOADERR_INSTRUCTOR_GETDETAIL, { error: err.response }));
        return err.response;
      })
  };
};