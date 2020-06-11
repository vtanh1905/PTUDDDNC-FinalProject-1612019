import React, { useState, useContext } from 'react'
import { StyleSheet, View, ToastAndroid } from 'react-native';
import { TextInput } from 'react-native-paper';

import ButtonDefault from 'components/Button/ButtonDefault'
import Toast from 'components/Toast'
import UserContext from '../../contexts/UserContext'

function Register(props) {
  const { navigation } = props;
  const [inputUsername, setInputUsername] = useState("")
  const [inputEmail, setInputEmail] = useState("")
  const [inputPassword, setInputPassword] = useState("")
  const [inputConfirmPassword, setInputConfirmPassword] = useState("")

  const { users, setUsers } = useContext(UserContext)

  const handleRegister = () => {
    if (inputUsername === "" || inputEmail === "" || inputPassword === "" || inputConfirmPassword === "") {
      Toast("Please fill your information!");
      return
    }

    if (inputPassword !== inputConfirmPassword) {
      Toast("Password and Confirm Password is not correctly!");
      return
    }

    setUsers([...users, {
      username: inputUsername,
      password: inputPassword,
      fullname: "Vũ Tuấn Anh",
      dob: "19/05/1998",
      email: inputEmail,
      phone: "0966996874"
    }])

    Toast("Register Successfully!");
    navigation.navigate('Login');
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
          <ButtonDefault title="Confirm" onPress={handleRegister} />
        </View>
      </View>
    </View>
  )
}

export default Register

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