const axios = require('axios');
const action = (type, payload) => ({ type, payload });

const type = {
    LOADING_FORGET_PASS: "LOADING_FORGET_PASS",
    LOADED_FORGET_PASS: "LOADED_FORGET_PASS",
    LOADERR_FORGET_PASS: "LOADERR_FORGET_PASS"
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
        case type.LOADING_FORGET_PASS:
            return {
                ...state,
                loading: true,
            };

        case type.LOADED_FORGET_PASS:
            return {
                ...state,
                loading: false,
                data: actions.payload.data,
                error: {
                    hasError: false,
                    message: '',
                },
            };

        case type.LOADERR_FORGET_PASS:
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

export const Req_User_Forget_Pass = (email) => {
    return async dispatch => {
        dispatch(action(type.LOADING_FORGET_PASS));
        return await axios.post('https://api.itedu.me/user/forget-pass/send-email', {
            "email": email,
        }).then((res) => {
            dispatch(action(type.LOADED_FORGET_PASS, { data: res.data }));
            return res;
        }).catch((err) => {
            dispatch(action(type.LOADERR_FORGET_PASS, { error: err.response }));
            return err.response;
        })
    };
};