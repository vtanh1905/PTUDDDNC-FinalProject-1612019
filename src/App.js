import 'react-native-gesture-handler';
import React from 'react';
import { registerRootComponent } from 'expo';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Introduce from './screens/Authentication/Introduce'
import Login from './screens/Authentication/Login'
import Register from './screens/Authentication/Register'
import ForgotPassword from './screens/Authentication/ForgotPassword'
import VerifyPassword from './screens/Authentication/VerifyPassword'

const Stack = createStackNavigator();


import Icon from 'react-native-vector-icons/AntDesign';
import { TouchableOpacity } from 'react-native';
const optionStackScreen = ({ navigation }) => ({
  headerTitleStyle: { alignSelf: 'center', paddingRight: 55 },
  headerLeft: () => (
    <TouchableOpacity style={{ paddingLeft: 10 }} onPress={() => navigation.goBack()}>
      <Icon name="arrowleft" size={30} />
    </TouchableOpacity>
  )
});

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        {/* Not Login */}
        <Stack.Screen name="Introduce" component={Introduce} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} options={optionStackScreen} />
        <Stack.Screen name="Register" component={Register} options={optionStackScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={optionStackScreen} />
        <Stack.Screen name="VerifyPassword" component={VerifyPassword} options={optionStackScreen} />

        {/* Logined */}
      </Stack.Navigator>
    </NavigationContainer>

  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

registerRootComponent(App);