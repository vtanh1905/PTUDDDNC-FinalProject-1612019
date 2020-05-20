import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

// Tab Navigation
import BottonTabStack from './BottonTabStack'

// AccountManagement
import AccountManagement from '../screens/AccountManagement/AccountManagement'
import Profile from '../screens/AccountManagement/Profile'
import Setting from '../screens/AccountManagement/Setting'


// Course
import ListCourses from '../screens/Course/ListCourses'

import IconAntDesign from 'react-native-vector-icons/AntDesign';
import { TouchableOpacity, View } from 'react-native';
import { Avatar } from 'react-native-elements';

const optionStackHaveButtonBack = ({ navigation, route }) => ({
  headerTitleStyle: { alignSelf: 'center', paddingRight: 55 },
  headerLeft: () => (
    <TouchableOpacity style={{ paddingLeft: 10 }} onPress={() => navigation.goBack()}>
      <IconAntDesign name="arrowleft" size={30} />
    </TouchableOpacity>
  )
});

function getHeaderTitle(route) {
  const routeName = route.state
    ? route.state.routes[route.state.index].name
    : route.params?.screen || 'Home'

  return routeName;
}

const optionStackHaveAvatar = ({ navigation, route }) => ({
  headerShown: getHeaderTitle(route) !== 'Search',
  headerTitle: getHeaderTitle(route),
  headerTitleStyle: { alignSelf: 'center', paddingLeft: 55 },
  headerRight: () => (
    <View>
      <TouchableOpacity style={{ paddingRight: 10 }} onPress={() => navigation.navigate("Account Management")} >
        <Avatar
          rounded
          source={{
            uri:
              'https://hinhnendephd.com/wp-content/uploads/2019/10/anh-avatar-dep.jpg',
          }}
        />
      </TouchableOpacity>
    </View>
  )
});

function DashboardStack() {
  return (
    <Stack.Navigator headerMode={"screen"}>
      <Stack.Screen name="BOTTONTAB" component={BottonTabStack} options={optionStackHaveAvatar} />
      <Stack.Screen name="Account Management" component={AccountManagement} options={optionStackHaveButtonBack} />
      <Stack.Screen name="ListCourses" component={ListCourses} options={{ title: '', ...optionStackHaveButtonBack }} />
      <Stack.Screen name="Profile" component={Profile} options={optionStackHaveButtonBack} />
      <Stack.Screen name="Setting" component={Setting} options={optionStackHaveButtonBack} />
    </Stack.Navigator>

  )
}

export default DashboardStack
