import 'react-native-gesture-handler';
import React from 'react';
import { registerRootComponent } from 'expo';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Authentication
import Introduce from './screens/Authentication/Introduce'
import Login from './screens/Authentication/Login'
import Register from './screens/Authentication/Register'
import ForgotPassword from './screens/Authentication/ForgotPassword'
import VerifyPassword from './screens/Authentication/VerifyPassword'

// Main
import Home from './screens/Main/Home'

// AccountManagement
import AccountManagement from './screens/AccountManagement/AccountManagement'

const Stack = createStackNavigator();

import IconAntDesign from 'react-native-vector-icons/AntDesign';
import { TouchableOpacity, View } from 'react-native';
import { Avatar } from 'react-native-elements';
import { Button, Paragraph, Menu, Divider, Provider } from 'react-native-paper';

const optionStackHaveButtonBack = ({ navigation }) => ({
  headerTitleStyle: { alignSelf: 'center', paddingRight: 55 },
  headerLeft: () => (
    <TouchableOpacity style={{ paddingLeft: 10 }} onPress={() => navigation.goBack()}>
      <IconAntDesign name="arrowleft" size={30} />
    </TouchableOpacity>
  )
});

const optionStackHaveAvatar = ({ navigation }) => ({
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

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        {/* Not Login */}
        {/* <Stack.Screen name="Introduce" component={Introduce} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} options={optionStackHaveButtonBack} />
        <Stack.Screen name="Register" component={Register} options={optionStackHaveButtonBack} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={optionStackHaveButtonBack} />
        <Stack.Screen name="VerifyPassword" component={VerifyPassword} options={optionStackHaveButtonBack} /> */}

        {/* Logined */}



        <Stack.Screen name="Home" component={Home} options={optionStackHaveAvatar} />

        <Stack.Screen name="Account Management" component={AccountManagement} options={optionStackHaveButtonBack} />

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