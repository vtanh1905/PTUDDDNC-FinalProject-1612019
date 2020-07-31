import { combineReducers } from 'redux';
import API_User_Login from './user/API_User_Login';
import API_User_Forget_Pass from './user/API_User_Forget_Pass';
import API_User_Register from './user/API_User_Register';
import API_User_Me from './user/API_User_Me';
import API_User_Change_Pass from './user/API_User_Change_Pass';
import API_User_Status_With_Course from './user/API_User_Status_With_Course';
import API_User_Update_Favorite_Categories from './user/API_User_Update_Favorite_Categories';
import API_User_Get_Favorite_Courses from './user/API_User_Get_Favorite_Courses';

import API_Course_In_Browse from './course/API_Course_In_Browse';
import API_Course_GetDetail from './course/API_Course_GetDetail';

import API_Category_All from './category/API_Category_All';
import API_Category_GetCourse from './category/API_Category_GetCourse';

import API_Instructor_GetAll from './instructor/API_Instructor_GetAll';

export default combineReducers({
    // User
    API_User_Login,
    API_User_Forget_Pass,
    API_User_Register,
    API_User_Me,
    API_User_Change_Pass,
    API_User_Update_Favorite_Categories,
    API_User_Get_Favorite_Courses,

    // Course
    API_Course_In_Browse,
    API_Course_GetDetail,

    //Category
    API_Category_All,
    API_Category_GetCourse,
    API_User_Status_With_Course,

    API_Instructor_GetAll,
});