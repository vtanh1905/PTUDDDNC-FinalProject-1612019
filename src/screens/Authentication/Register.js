import React, { useState, useContext } from 'react'
import { StyleSheet, View, ToastAndroid } from 'react-native';
import { TextInput } from 'react-native-paper';
import { connect } from 'react-redux';
import { Req_User_Register } from '../../reducers/user/API_User_Register'
import { Req_User_Send_Email_Active } from '../../reducers/user/API_User_Send_Email_Active'

import ButtonDefault from 'components/Button/ButtonDefault'
import Toast from 'components/Toast'
import UserContext from '../../contexts/UserContext'

function Register(props) {
  const { navigation, API_User_Register, Req_User_Register, Req_User_Send_Email_Active } = props;
  const [inputUsername, setInputUsername] = useState("")
  const [inputEmail, setInputEmail] = useState("")
  const [inputPhone, setInputPhone] = useState("")
  const [inputPassword, setInputPassword] = useState("")
  const [inputConfirmPassword, setInputConfirmPassword] = useState("")

  const handleRegister = () => {
    if (inputUsername === "" || inputEmail === "" || inputPassword === "" || inputConfirmPassword === "" || inputPhone === "") {
      Toast("Please fill your information!");
      return
    }

    if (inputPassword !== inputConfirmPassword) {
      Toast("Password and Confirm Password is not correctly!");
      return
    }

    Req_User_Register(inputUsername, inputEmail, inputPhone, inputPassword).then((res) => {
      console.log(res);
      if (res.status === 200) {
        Req_User_Send_Email_Active(inputEmail).then((res) => {
          if (res.status === 200) {
            Toast("Please check your email to active account!");
            navigation.navigate('Login');
          } else if (res.status === 400) {
            Toast(res.data.message);
          }
        })
      } else if (res.status === 400) {
        Toast(res.data.message);
      }
    })

  }

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <View style={{ marginBottom: 7 }}>
          <TextInput
            label='Username'
            theme={{ colors: { primary: "#2089DC" } }}
            value={inputUsername}
            onChangeText={text => setInputUsername(text)}
          />
        </View>

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
            label='Phone'
            theme={{ colors: { primary: "#2089DC" } }}
            value={inputPhone}
            onChangeText={text => setInputPhone(text)}
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

        <View style={{ marginBottom: 7 }}>
          <TextInput
            label='Confirm Password'
            secureTextEntry={true}
            theme={{ colors: { primary: "#2089DC" } }}
            value={inputConfirmPassword}
            onChangeText={text => setInputConfirmPassword(text)}
          />
        </View>

        <View>
          <ButtonDefault loading={API_User_Register.loading} title="Confirm" onPress={handleRegister} />
        </View>
      </View>
    </View>
  )
}

const mapStatetoProps = state => {
  return state;
};

const mapDispathtoProps = {
  Req_User_Register,
  Req_User_Send_Email_Active
};

export default connect(
  mapStatetoProps,
  mapDispathtoProps,
)(Register);

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