const axios = require('axios');
const action = (type, payload) => ({ type, payload });

const type = {
  LOADING_CATEGORY_ALL: "LOADING_CATEGORY_ALL",
  LOADED_CATEGORY_ALL: "LOADED_CATEGORY_ALL",
  LOADERR_CATEGORY_ALL: "LOADERR_CATEGORY_ALL"
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
    case type.LOADING_CATEGORY_ALL:
      return {
        ...state,
        loading: true,
      };

    case type.LOADED_CATEGORY_ALL:
      return {
        ...state,
        loading: false,
        data: actions.payload.data,
        error: {
          hasError: false,
          message: '',
        },
      };

    case type.LOADERR_CATEGORY_ALL:
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

export const Req_Category_All = () => {
  return async dispatch => {
    dispatch(action(type.LOADING_CATEGORY_ALL));
    return await axios.get('https://api.itedu.me/category/all')
      .then((res) => {
        dispatch(action(type.LOADED_CATEGORY_ALL, { data: res.data.payload }));
        return res;
      }).catch((err) => {
        dispatch(action(type.LOADERR_CATEGORY_ALL, { error: err.response }));
        return err.response;
      })
  };
};