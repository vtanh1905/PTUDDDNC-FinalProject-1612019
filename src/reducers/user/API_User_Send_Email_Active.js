const axios = require('axios');
const action = (type, payload) => ({ type, payload });

const type = {
    LOADING_SEND_EMAIL_ACTIVE: "LOADING_SEND_EMAIL_ACTIVE",
    LOADED_SEND_EMAIL_ACTIVE: "LOADED_SEND_EMAIL_ACTIVE",
    LOADERR_SEND_EMAIL_ACTIVE: "LOADERR_SEND_EMAIL_ACTIVE"
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
        case type.LOADING_SEND_EMAIL_ACTIVE:
            return {
                ...state,
                loading: true,
            };

        case type.LOADED_SEND_EMAIL_ACTIVE:
            return {
                ...state,
                loading: false,
                data: actions.payload.data,
                error: {
                    hasError: false,
                    message: '',
                },
            };

        case type.LOADERR_SEND_EMAIL_ACTIVE:
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

export const Req_User_Send_Email_Active = (email) => {
    return async dispatch => {
        dispatch(action(type.LOADING_SEND_EMAIL_ACTIVE));
        return await axios.post('https://api.itedu.me/user/send-activate-email', {
            "email": email,
        }).then((res) => {
            dispatch(action(type.LOADED_SEND_EMAIL_ACTIVE, { data: res.data }));
            return res;
        }).catch((err) => {
            dispatch(action(type.LOADERR_SEND_EMAIL_ACTIVE, { error: err.response }));
            return err.response;
        })
    };
};