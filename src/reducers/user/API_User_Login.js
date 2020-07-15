const axios = require('axios');
const action = (type, payload) => ({ type, payload });

const type = {
  LOADING_LOGIN: "LOADING_LOGIN",
  LOADED_LOGIN: "LOADED_LOGIN",
  LOADERR_LOGIN: "LOADERR_LOGIN"
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
    case type.LOADING_LOGIN:
      return {
        ...state,
        loading: true,
      };

    case type.LOADED_LOGIN:
      return {
        ...state,
        loading: false,
        data: actions.payload.data,
        error: {
          hasError: false,
          message: '',
        },
      };

    case type.LOADERR_LOGIN:
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

export const Req_User_Login = (email, password) => {
  return async dispatch => {
    dispatch(action(type.LOADING_LOGIN));
    return await axios.post('https://api.itedu.me/user/login', {
      "email": "vtanhxxx@gmail.com",
      "password": "123456789"
    }).then((res) => {
      dispatch(action(type.LOADED_LOGIN, { data: res.data }));
    }).catch((err) => {
      dispatch(action(type.LOADERR_LOGIN, { error: err.response }));
    })
  };
};