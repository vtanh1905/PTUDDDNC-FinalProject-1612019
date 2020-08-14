const axios = require('axios');
const action = (type, payload) => ({ type, payload });

const type = {
  LOADING_REGISTER: "LOADING_REGISTER",
  LOADED_REGISTER: "LOADED_REGISTER",
  LOADERR_REGISTER: "LOADERR_REGISTER"
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
    case type.LOADING_REGISTER:
      return {
        ...state,
        loading: true,
      };

    case type.LOADED_REGISTER:
      return {
        ...state,
        loading: false,
        data: actions.payload.data,
        error: {
          hasError: false,
          message: '',
        },
      };

    case type.LOADERR_REGISTER:
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

export const Req_User_Register = (fullname, email, phone, password) => {
  return async dispatch => {
    dispatch(action(type.LOADING_REGISTER));
    return await axios.post('https://api.itedu.me/user/register', {
      "username": fullname,
      "email": email,
      "phone": phone,
      "password": password
    }).then((res) => {
      dispatch(action(type.LOADED_REGISTER, { data: res.data }));
      return res;
    }).catch((err) => {
      dispatch(action(type.LOADERR_REGISTER, { error: err.response }));
      return err.response;
    })
  };
};