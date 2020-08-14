const axios = require('axios');
import { AsyncStorage } from 'react-native';
const action = (type, payload) => ({ type, payload });

const type = {
	LOADING_SEARCH_COURSE: "LOADING_SEARCH_COURSE",
	LOADED_SEARCH_COURSE: "LOADED_SEARCH_COURSE",
	LOADERR_SEARCH_COURSE: "LOADERR_SEARCH_COURSE"
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
		case type.LOADING_SEARCH_COURSE:
			return {
				...state,
				loading: true,
			};

		case type.LOADED_SEARCH_COURSE:
			return {
				...state,
				loading: false,
				data: actions.payload.data,
				error: {
					hasError: false,
					message: '',
				},
			};

		case type.LOADERR_SEARCH_COURSE:
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

export const Req_Search_Course = (keyword) => {
	return async dispatch => {
		dispatch(action(type.LOADING_SEARCH_COURSE));
		return await axios.post('https://api.itedu.me/course/searchV2', {
			"token": await AsyncStorage.getItem("token"),
			"keyword": keyword,
			"limit": 10,
			"offset": 1
		})
			.then((res) => {
				dispatch(action(type.LOADED_SEARCH_COURSE, { data: res.data.payload }));
				return res;
			}).catch((err) => {
				dispatch(action(type.LOADERR_SEARCH_COURSE, { error: err.response }));
				return err.response;
			})
	};
};