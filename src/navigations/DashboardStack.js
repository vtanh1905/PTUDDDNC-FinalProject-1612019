import React, { useContext } from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import ThemeContext from '../contexts/ThemeContext'
import UserContext from '../contexts/UserContext'

const Stack = createStackNavigator();
// Tab Navigation
import BottonTabStack from './BottonTabStack'

// AccountManagement
import AccountManagement from '../screens/AccountManagement/AccountManagement'
import Profile from '../screens/AccountManagement/Profile'
import Setting from '../screens/AccountManagement/Setting'
import ChangePassword from '../screens/AccountManagement/ChangePassword'

// Course
import ListCourses from '../screens/Course/ListCourses'
import CourseDetail from '../screens/Course/CourseDetail'
import ListCoursesImage from '../screens/Course/ListCoursesImage'

// Path
import ListPaths from '../screens/Path/ListPaths'
import PathDetail from '../screens/Path/PathDetail'


import IconAntDesign from 'react-native-vector-icons/AntDesign';
import { TouchableOpacity, View } from 'react-native';
import { Avatar } from 'react-native-elements';

const optionStackHaveButtonBack = ({ navigation, route }, lightTheme) => ({
  headerTitleStyle: { alignSelf: 'center', paddingRight: 55 },
  headerLeft: () => (
    <TouchableOpacity style={{ paddingLeft: 15 }} onPress={() => navigation.goBack()}>
      <IconAntDesign name="arrowleft" size={23} color={lightTheme ? "#000000" : "#FFFFFF"} />
    </TouchableOpacity>
  )
});

function getHeaderTitle(route) {
  const routeName = route.state
    ? route.state.routes[route.state.index].name
    : route.params?.screen || 'Home'

  return routeName;
}

const optionStackHaveAvatar = ({ navigation, route }, imageURL) => ({
  headerShown: getHeaderTitle(route) !== 'Search',
  headerTitle: getHeaderTitle(route),
  headerTitleStyle: { alignSelf: 'center', paddingLeft: 55 },
  headerRight: () => (
    <View>
      <TouchableOpacity style={{ paddingRight: 10 }} onPress={() => navigation.navigate("Account Management")} >
        <Avatar
          rounded
          source={{
            uri: imageURL,
          }}
        />
      </TouchableOpacity>
    </View>
  )
});

function DashboardStack() {
  const { themeLight } = useContext(ThemeContext)
  const { user } = useContext(UserContext)

  return (
    <Stack.Navigator headerMode={"screen"}  >
      <Stack.Screen name="BOTTONTAB" component={BottonTabStack} options={(props) => optionStackHaveAvatar(props, user.avatar)} />
      <Stack.Screen name="Account Management" component={AccountManagement} options={(props) => optionStackHaveButtonBack(props, themeLight.isLightTheme)} />
      <Stack.Screen name="Profile" component={Profile} options={(props) => optionStackHaveButtonBack(props, themeLight.isLightTheme)} />
      <Stack.Screen name="Change Password" component={ChangePassword} options={(props) => optionStackHaveButtonBack(props, themeLight.isLightTheme)} />
      <Stack.Screen name="Setting" component={Setting} options={(props) => optionStackHaveButtonBack(props, themeLight.isLightTheme)} />
      <Stack.Screen name="ListCourses" component={ListCourses} options={{ title: '', ...(props) => optionStackHaveButtonBack(props, themeLight.isLightTheme) }} />
      <Stack.Screen name="CourseDetail" component={CourseDetail} options={{ headerShown: false, ...(props) => optionStackHaveButtonBack(props, themeLight.isLightTheme) }} />
      <Stack.Screen name="Paths" component={ListPaths} options={(props) => optionStackHaveButtonBack(props, themeLight.isLightTheme)} />
      <Stack.Screen name="PathDetail" component={PathDetail} options={(props) => optionStackHaveButtonBack(props, themeLight.isLightTheme)} />
      <Stack.Screen name="ListCoursesImage" component={ListCoursesImage} options={{ headerShown: false, ...(props) => optionStackHaveButtonBack(props, themeLight.isLightTheme) }} />
    </Stack.Navigator>

  )
}

export default DashboardStack
