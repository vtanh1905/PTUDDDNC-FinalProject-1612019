import React, { useState, useContext } from 'react'
import { StyleSheet, View, AsyncStorage } from 'react-native';
import { TextInput } from 'react-native-paper';
import { connect } from 'react-redux';

import ButtonDefault from 'components/Button/ButtonDefault'
import ButtonClear from 'components/Button/ButtonClear'
import Toast from 'components/Toast'
import UserContext from '../../contexts/UserContext'



import { Req_User_Change_Pass } from '../../reducers/user/API_User_Change_Pass'


function ChangePassword(props) {
  const { navigation, Req_User_Change_Pass } = props;
  const [inputOldPassword, setInputOldPassword] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [inputConfirmPassword, setInputConfirmPassword] = useState("");

  const { user } = useContext(UserContext)

  const handleConfirm = () => {
    if (inputPassword === inputConfirmPassword) {
      Req_User_Change_Pass(user.id, inputOldPassword, inputPassword).then(async (res) => {
        if (res.status === 200) {
          Toast('Change Password successfully!');
          await AsyncStorage.removeItem("token");
          navigation.navigate('Login');
        } else {
          Toast(res.data.message);
        }


      })
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

const mapStatetoProps = state => {
  return state;
};

const mapDispathtoProps = {
  Req_User_Change_Pass
};

export default connect(
  mapStatetoProps,
  mapDispathtoProps,
)(ChangePassword);


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