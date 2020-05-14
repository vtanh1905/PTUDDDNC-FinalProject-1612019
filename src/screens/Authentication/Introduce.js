import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native';


import ButtonDefault from '../../components/Button/ButtonDefault'

function Introduce(props) {
  const { navigation } = props;
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image style={styles.stretch} source={require("../../assets/logo.png")} />
        <Text style={styles.title}>Study Online</Text>
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

export default Introduce

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