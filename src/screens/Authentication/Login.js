import React from 'react'
import { StyleSheet, View } from 'react-native';

import ButtonDefault from '../../components/Button/ButtonDefault'
import ButtonClear from '../../components/Button/ButtonClear'

import { TextInput } from 'react-native-paper';


function Login(props) {
  const { navigation } = props;
  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <View style={{ marginBottom: 7 }}>
          <TextInput
            label='Username'
            theme={{ colors: { primary: "#2089DC" } }}
          />
        </View>

        <View style={{ marginBottom: 7 }}>
          <TextInput
            label='Password'
            secureTextEntry={true}
            theme={{ colors: { primary: "#2089DC" } }}
          />
        </View>

        <View style={styles.containerBotton}>
          <View>
            <ButtonDefault title="Login" />
            <ButtonClear title="Forgot Password" onPress={() => navigation.navigate('ForgotPassword')} />
          </View>
        </View>
      </View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    paddingTop: 28,
    flex: 1,
    alignItems: "center"
  },
  form: {
    width: "80%",
  },
  input: {
    marginEnd: 7
  }
});