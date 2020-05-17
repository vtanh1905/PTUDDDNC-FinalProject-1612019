import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native';
import IconAntDesign from 'react-native-vector-icons/AntDesign';

// Authentication
import Introduce from '../screens/Authentication/Introduce'
import Login from '../screens/Authentication/Login'
import Register from '../screens/Authentication/Register'
import ForgotPassword from '../screens/Authentication/ForgotPassword'
import VerifyPassword from '../screens/Authentication/VerifyPassword'

const Stack = createStackNavigator();

const optionStackHaveButtonBack = ({ navigation }) => ({
  headerTitleStyle: { alignSelf: 'center', paddingRight: 55 },
  headerLeft: () => (
    <TouchableOpacity style={{ paddingLeft: 10 }} onPress={() => navigation.goBack()}>
      <IconAntDesign name="arrowleft" size={30} />
    </TouchableOpacity>
  )
});

function AuthStack() {
  return (
    <Stack.Navigator initialRouteName="Introduce">
      <Stack.Screen name="Introduce" component={Introduce} options={{ headerShown: false }} />
      <Stack.Screen name="Login" component={Login} options={optionStackHaveButtonBack} />
      <Stack.Screen name="Register" component={Register} options={optionStackHaveButtonBack} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={optionStackHaveButtonBack} />
      <Stack.Screen name="VerifyPassword" component={VerifyPassword} options={optionStackHaveButtonBack} />
    </Stack.Navigator>
  )
}

export default AuthStack
