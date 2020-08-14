const axios = require('axios');
import { AsyncStorage } from 'react-native';
const action = (type, payload) => ({ type, payload });

const type = {
  LOADING_UPDATE_FAVORITE_CATEGORIES: "LOADING_UPDATE_FAVORITE_CATEGORIES",
  LOADED_UPDATE_FAVORITE_CATEGORIES: "LOADED_UPDATE_FAVORITE_CATEGORIES",
  LOADERR_UPDATE_FAVORITE_CATEGORIES: "LOADERR_UPDATE_FAVORITE_CATEGORIES"
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
    case type.LOADING_UPDATE_FAVORITE_CATEGORIES:
      return {
        ...state,
        loading: true,
      };

    case type.LOADED_UPDATE_FAVORITE_CATEGORIES:
      return {
        ...state,
        loading: false,
        data: actions.payload.data,
        error: {
          hasError: false,
          message: '',
        },
      };

    case type.LOADERR_UPDATE_FAVORITE_CATEGORIES:
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

export const Req_User_Update_Favorite_Categories = (categoryIds) => {
  return async dispatch => {
    dispatch(action(type.LOADING_UPDATE_FAVORITE_CATEGORIES));
    return await axios.put('https://api.itedu.me/user/update-favorite-categories', {
      "categoryIds": categoryIds,
    }, {
      headers: {
        "Authorization": "Bearer " + await AsyncStorage.getItem('token')
      }
    }).then((res) => {
      dispatch(action(type.LOADED_UPDATE_FAVORITE_CATEGORIES, { data: res.data }));
      return res;
    }).catch((err) => {
      dispatch(action(type.LOADERR_UPDATE_FAVORITE_CATEGORIES, { error: err.response }));
      return err.response;
    })
  };
};