const axios = require('axios');
import { AsyncStorage } from 'react-native';
const action = (type, payload) => ({ type, payload });

const type = {
  LOADING_DELETE_HISTORY_SEARCH: "LOADING_DELETE_HISTORY_SEARCH",
  LOADED_DELETE_HISTORY_SEARCH: "LOADED_DELETE_HISTORY_SEARCH",
  LOADERR_DELETE_HISTORY_SEARCH: "LOADERR_DELETE_HISTORY_SEARCH"
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
    case type.LOADING_DELETE_HISTORY_SEARCH:
      return {
        ...state,
        loading: true,
      };

    case type.LOADED_DELETE_HISTORY_SEARCH:
      return {
        ...state,
        loading: false,
        data: actions.payload.data,
        error: {
          hasError: false,
          message: '',
        },
      };

    case type.LOADERR_DELETE_HISTORY_SEARCH:
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

export const Req_Delete_History_Search = (id) => {
  return async dispatch => {
    dispatch(action(type.LOADING_DELETE_HISTORY_SEARCH));
    return await axios.delete(`https://api.itedu.me/course/delete-search-history/${id}`, {
      headers: {
        "Authorization": "Bearer " + await AsyncStorage.getItem('token')
      }
    })
      .then((res) => {
        dispatch(action(type.LOADED_DELETE_HISTORY_SEARCH, { data: res.data }));
        return res;
      }).catch((err) => {
        dispatch(action(type.LOADERR_DELETE_HISTORY_SEARCH, { error: err.response }));
        return err.response;
      })
  };
};