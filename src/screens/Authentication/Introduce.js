import React, { useContext, useEffect } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native';
import { connect } from 'react-redux';
import { AsyncStorage } from 'react-native';

import { Req_User_Me } from '../../reducers/user/API_User_Me'

import ThemeContext from '../../contexts/ThemeContext'
import ButtonDefault from 'components/Button/ButtonDefault'
import UserContext from '../../contexts/UserContext'

function Introduce(props) {
  const { navigation, Req_User_Me } = props;
  const { themeLight } = useContext(ThemeContext)
  const { setUser } = useContext(UserContext)

  useEffect(() => {
    Req_User_Me().then(async (res) => {
      if (res.status === 200) {
        setUser(res.data.payload)
        navigation.navigate('DashboardStack');
      }
      // else if (res.status === 401) {
      //   await AsyncStorage.removeItem('token');
      // }

    });
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image style={styles.stretch} source={require("../../assets/logo.png")} />
        <Text style={{ ...styles.title, ...themeLight.styles.text }}>Study Online</Text>
      </View>
      <View style={styles.buttons}>
        <View style={styles.button}>
          <ButtonDefault title="Login" onPress={() => navigation.navigate('Login')} />
        </View>
        <View style={styles.button}>
          <ButtonDefault title="Register" onPress={() => navigation.navigate('Register')} />
        </View>
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
)(Introduce);

const styles = StyleSheet.create({
  container: {
    paddingTop: 28,
    flex: 1
  },
  logo: {
    paddingTop: 150,
    flex: 0.2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  stretch: {
    width: 200,
    height: 200,
    resizeMode: 'stretch',
  },
  buttons: {
    flex: 0.8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    marginBottom: 5,
    width: "80%"
  },
  title: {
    fontSize: 30,
    fontWeight: "bold"
  }
});