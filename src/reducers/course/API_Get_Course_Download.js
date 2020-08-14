const axios = require('axios');
import { AsyncStorage } from 'react-native';
const action = (type, payload) => ({ type, payload });

const type = {
  LOADING_GET_COURSE_DOWNLOAD: "LOADING_GET_COURSE_DOWNLOAD",
  LOADED_GET_COURSE_DOWNLOAD: "LOADED_GET_COURSE_DOWNLOAD",
  LOADERR_GET_COURSE_DOWNLOAD: "LOADERR_GET_COURSE_DOWNLOAD"
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
    case type.LOADING_GET_COURSE_DOWNLOAD:
      return {
        ...state,
        loading: true,
      };

    case type.LOADED_GET_COURSE_DOWNLOAD:
      return {
        ...state,
        loading: false,
        data: actions.payload.data,
        error: {
          hasError: false,
          message: '',
        },
      };

    case type.LOADERR_GET_COURSE_DOWNLOAD:
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

export const Req_Get_Course_Download = () => {
  return async dispatch => {
    dispatch(action(type.LOADING_GET_COURSE_DOWNLOAD));
    return await AsyncStorage.getItem("videoDownload")
      .then((res) => {
        const json = JSON.parse(res);
        dispatch(action(type.LOADED_GET_COURSE_DOWNLOAD, { data: json }));
        return json
      }).catch((err) => {
        dispatch(action(type.LOADERR_GET_COURSE_DOWNLOAD, { error: err }));
        return err
      })
  };
};