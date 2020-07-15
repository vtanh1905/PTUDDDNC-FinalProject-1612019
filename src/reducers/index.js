import { combineReducers } from 'redux';
import API_User_Login from './user/API_User_Login';
import API_User_Forget_Pass from './user/API_User_Forget_Pass';
import API_User_Register from './user/API_User_Register';
import API_User_Me from './user/API_User_Me';

export default combineReducers({
    API_User_Login,
    API_User_Forget_Pass,
    API_User_Register,
    API_User_Me
});