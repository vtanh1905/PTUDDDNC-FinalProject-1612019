import React, { useEffect, useContext } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { connect } from 'react-redux';

import { Req_User_Me } from '../reducers/user/API_User_Me'
import ThemeContext from '../contexts/ThemeContext'
import UserContext from '../contexts/UserContext'

function SplashScreen(props) {
  const { navigation, Req_User_Me } = props;
  const { themeLight } = useContext(ThemeContext)
  const { setUser } = useContext(UserContext)

  useEffect(() => {
    Req_User_Me().then(async (res) => {
      if (res.status === 200) {
        setUser(res.data.payload)
        navigation.replace('DashboardStack');
      } else {
        navigation.replace('AUTHSTACK');
      }
      // else if (res.status === 401) {
      //   await AsyncStorage.removeItem('token');
      // }
    });
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image style={styles.stretch} source={require("../assets/logo.png")} />
        <Text style={{ ...styles.title, ...themeLight.styles.text }}>Study Online</Text>
      </View>
    </View>
  )
}

const mapStatetoProps = state => {
  return state;
};

const mapDispathtoProps = {
  Req_User_Me
};

export default connect(
  mapStatetoProps,
  mapDispathtoProps,
)(SplashScreen);


const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  logo: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  stretch: {
    width: 200,
    height: 200,
    resizeMode: 'stretch',
  },
  title: {
    fontSize: 30,
    fontWeight: "bold"
  }
});
