const axios = require('axios');
const action = (type, payload) => ({ type, payload });

const type = {
  LOADING_CATEGORY_GETCOURSE: "LOADING_CATEGORY_GETCOURSE",
  LOADED_CATEGORY_GETCOURSE: "LOADED_CATEGORY_GETCOURSE",
  LOADERR_CATEGORY_GETCOURSE: "LOADERR_CATEGORY_GETCOURSE"
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
    case type.LOADING_CATEGORY_GETCOURSE:
      return {
        ...state,
        loading: true,
      };

    case type.LOADED_CATEGORY_GETCOURSE:
      return {
        ...state,
        loading: false,
        data: actions.payload.data,
        error: {
          hasError: false,
          message: '',
        },
      };

    case type.LOADERR_CATEGORY_GETCOURSE:
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

export const Req_Category_GetCourse = (categoryID) => {
  return async dispatch => {
    dispatch(action(type.LOADING_CATEGORY_GETCOURSE));
    return await axios.post('https://api.itedu.me/course/search', {
      "keyword": "",
      "opt": {
        "category": [
          categoryID
        ],
        "time": [],
        "price": []
      },
      "limit": 10,
      "offset": 1
    })
      .then((res) => {
        dispatch(action(type.LOADED_CATEGORY_GETCOURSE, { data: res.data.payload }));
        return res;
      }).catch((err) => {
        dispatch(action(type.LOADERR_CATEGORY_GETCOURSE, { error: err.response }));
        return err.response;
      })
  };
};