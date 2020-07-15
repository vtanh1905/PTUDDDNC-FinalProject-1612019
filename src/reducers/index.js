import { combineReducers } from 'redux';
import API_User_Login from './user/API_User_Login';
import API_User_Forget_Pass from './user/API_User_Forget_Pass';

export default combineReducers({
    API_User_Login,
    API_User_Forget_Pass
});