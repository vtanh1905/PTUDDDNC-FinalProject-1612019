import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native';

import ButtonDefault from 'components/Button/ButtonDefault'
import ButtonClear from 'components/Button/ButtonClear'
import Toast from 'components/Toast'

import { TextInput } from 'react-native-paper';

import { USER } from '../../assets/data'



function ChangePassword(props) {
  const { navigation } = props;
  const [inputOldPassword, setInputOldPassword] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [inputConfirmPassword, setInputConfirmPassword] = useState("");

  const handleConfirm = () => {
    if (inputOldPassword.toLowerCase() === USER.password.toLowerCase() && inputPassword === inputConfirmPassword) {
      navigation.navigate('Login');
    } else {
      Toast('Something is not correct');
    }

  }

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <View style={{ marginBottom: 7 }}>
          <TextInput
            label='Old Password'
            secureTextEntry={true}
            theme={{ colors: { primary: "#2089DC" } }}
            value={inputOldPassword}
            onChangeText={text => setInputOldPassword(text)}
          />
        </View>

        <View style={{ marginBottom: 7 }}>
          <TextInput
            label='New Password'
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

        <View style={styles.containerBotton}>
          <View>
            <ButtonDefault title="Confirm" onPress={handleConfirm} />
          </View>
        </View>
      </View>
    </View>
  )
}

export default ChangePassword

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