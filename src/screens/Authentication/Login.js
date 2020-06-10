import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native';

import ButtonDefault from 'components/Button/ButtonDefault'
import ButtonClear from 'components/Button/ButtonClear'
import Toast from 'components/Toast'

import { TextInput } from 'react-native-paper';

import { USER } from '../../assets/data'


function Login(props) {
  const { navigation } = props;
  const [inputUserName, setInputUserName] = useState("");
  const [inputPassword, setInputPassword] = useState("");

  const handleLogin = () => {
    if (inputUserName.toLowerCase() === USER.username.toLowerCase() && inputPassword === USER.password) {
      setInputUserName("");
      setInputPassword("");
      navigation.navigate('DashboardStack');
    } else {
      Toast('Username or Password is not correct');
    }

  }

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <View style={{ marginBottom: 7 }}>
          <TextInput
            label='Username'
            theme={{ colors: { primary: "#2089DC" } }}
            value={inputUserName}
            onChangeText={text => setInputUserName(text)}
          />
        </View>

        <View style={{ marginBottom: 7 }}>
          <TextInput
            label='Password'
            secureTextEntry={true}
            theme={{ colors: { primary: "#2089DC" } }}
            value={inputPassword}
            onChangeText={text => setInputPassword(text)}
          />
        </View>

        <View style={styles.containerBotton}>
          <View>
            <ButtonDefault title="Login" onPress={handleLogin} />
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