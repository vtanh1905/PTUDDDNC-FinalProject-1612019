const axios = require('axios');
import { AsyncStorage } from 'react-native';
const action = (type, payload) => ({ type, payload });

const type = {
	LOADING_GET_HISTORY_SEARCH: "LOADING_GET_HISTORY_SEARCH",
	LOADED_GET_HISTORY_SEARCH: "LOADED_GET_HISTORY_SEARCH",
	LOADERR_GET_HISTORY_SEARCH: "LOADERR_GET_HISTORY_SEARCH"
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
		case type.LOADING_GET_HISTORY_SEARCH:
			return {
				...state,
				loading: true,
			};

		case type.LOADED_GET_HISTORY_SEARCH:
			return {
				...state,
				loading: false,
				data: actions.payload.data.payload.data,
				error: {
					hasError: false,
					message: '',
				},
			};

		case type.LOADERR_GET_HISTORY_SEARCH:
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

export const Req_Get_History_Search = () => {
	return async dispatch => {
		dispatch(action(type.LOADING_GET_HISTORY_SEARCH));
		return await axios.get('https://api.itedu.me/course/search-history', {
			headers: {
				"Authorization": "Bearer " + await AsyncStorage.getItem('token')
			}
		})
			.then((res) => {
				dispatch(action(type.LOADED_GET_HISTORY_SEARCH, { data: res.data }));
				return res;
			}).catch((err) => {
				dispatch(action(type.LOADERR_GET_HISTORY_SEARCH, { error: err.response }));
				return err.response;
			})
	};
};