import React, { useState, useContext, useEffect, useRef } from 'react'
import { StyleSheet, View, Text } from 'react-native';
import { connect } from 'react-redux';
import { AsyncStorage } from 'react-native';

import ButtonDefault from 'components/Button/ButtonDefault'
import ButtonClear from 'components/Button/ButtonClear'
import Toast from 'components/Toast'

import { TextInput } from 'react-native-paper';

import UserContext from '../../contexts/UserContext'
import { Req_User_Login } from '../../reducers/user/API_User_Login'

function Login(props) {
  const { navigation, Req_User_Login, API_User_Login } = props;
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const { setUser } = useContext(UserContext)

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <View style={{ marginBottom: 7 }}>
          <TextInput
            label='Email'
            theme={{ colors: { primary: "#2089DC" } }}
            value={inputEmail}
            onChangeText={text => setInputEmail(text)}
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
            <ButtonDefault title="Login" loading={API_User_Login.loading} onPress={() => {
              Req_User_Login(inputEmail, inputPassword).then(async (res) => {
                if (res.status === 200) {
                  setUser(res.data.userInfo);
                  await AsyncStorage.setItem(
                    'token',
                    res.data.token
                  );
                  Toast('Login Successfully');
                  navigation.navigate('DashboardStack');
                } else if (res.status === 400) {
                  Toast('Username or Password is not correct');
                }

              })
            }} />
            <ButtonClear title="Forgot Password" onPress={() => navigation.navigate('ForgotPassword')} />
          </View>
        </View>
      </View>
    </View>
  )
}

const mapStatetoProps = state => {
  return state;
};

const mapDispathtoProps = {
  Req_User_Login
};

export default connect(
  mapStatetoProps,
  mapDispathtoProps,
)(Login);

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