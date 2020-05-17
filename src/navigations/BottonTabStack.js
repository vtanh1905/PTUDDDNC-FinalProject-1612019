import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Main
import Home from '../screens/Main/Home'
import Download from '../screens/Main/Download'
import Browse from '../screens/Main/Browse'
import Search from '../screens/Main/Search'

const Tab = createBottomTabNavigator();

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

function BottonTabStack() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = "md-home"
          } else if (route.name === 'Download') {
            iconName = 'md-cloud-download';
          } else if (route.name === 'Browse') {
            iconName = 'md-reorder';
          } else if (route.name === 'Search') {
            iconName = 'md-search';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#2089DC',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Download" component={Download} />
      <Tab.Screen name="Browse" component={Browse} />
      <Tab.Screen name="Search" component={Search} />
    </Tab.Navigator>
  )
}

export default BottonTabStack

