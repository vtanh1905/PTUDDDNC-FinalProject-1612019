import React, { useContext } from 'react'
import { View, StyleSheet, Text } from 'react-native';
import { Avatar, Divider } from 'react-native-paper';
import { AsyncStorage } from 'react-native';
import { ListItem } from 'react-native-elements'

import ThemeContext from '../../contexts/ThemeContext'
import UserContext from '../../contexts/UserContext'

const list = [
  {
    title: 'Profile',
    icon: 'person',
    screenNext: 'Profile'
  },
  {
    title: 'Setting',
    icon: 'settings',
    screenNext: 'Setting'
  },
  {
    title: 'Logout',
    icon: 'keyboard-return',
    screenNext: 'Introduce'
  },
]

function AccountManagement(props) {
  const { navigation } = props;
  const { themeLight } = useContext(ThemeContext)
  const { user, setUser } = useContext(UserContext)

  return (
    <View style={styles.container}>
      <View style={styles.containerAvatar}>
        <Avatar.Image size={100} source={{ uri: user.avatar }} />
        <View style={styles.containerUsername}>
          <Text style={{ ...styles.username, ...themeLight.styles.text }}>{user.name}</Text>
        </View>
      </View>
      <View>
        <Divider />
      </View>
      {
        list.map((item, i) => (
          <ListItem
            key={i}
            title={item.title}
            leftIcon={{ name: item.icon, color: themeLight.isLightTheme ? "#000000" : "#FFFFFF" }}
            bottomDivider
            chevron
            titleStyle={{ color: themeLight.isLightTheme ? "#000000" : "#FFFFFF" }}
            linearGradientProps={!themeLight.isLightTheme ? {
              colors: ['rgb(60, 63, 68)', "rgb(60, 63, 68)"],
            } : null}
            onPress={async () => {
              if (item.title === 'Logout') {
                await AsyncStorage.removeItem("token");
              }
              navigation.navigate(item.screenNext)
            }}
          />
        ))
      }
    </View>
  )
}

export default AccountManagement

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerAvatar: {
    padding: 5,
    flexDirection: "row",
  },
  containerUsername: {
    paddingLeft: 20,
    justifyContent: "center",
  },
  username: {
    fontWeight: "bold",
    fontSize: 20
  },
  button: {
    alignItems: "flex-start",
    fontSize: 50,
    width: 900
  }
});