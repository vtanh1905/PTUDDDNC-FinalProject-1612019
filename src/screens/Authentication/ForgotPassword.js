import React, { useState, useEffect, createRef } from 'react'
import { StyleSheet, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import { connect } from 'react-redux';
import { Req_User_Forget_Pass } from '../../reducers/user/API_User_Forget_Pass'

import ButtonDefault from 'components/Button/ButtonDefault'
import Toast from 'components/Toast'
function ForgotPassword(props) {
  const { navigation, Req_User_Forget_Pass, API_User_Forget_Pass } = props;
  const [inputEmail, setInputEmail] = useState("");

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
        <View>
          {/* <ButtonDefault title="Reset Password" onPress={() => navigation.navigate('VerifyPassword')} /> */}
          <ButtonDefault loading={API_User_Forget_Pass.loading} title="Reset Password" onPress={() => {
            Req_User_Forget_Pass(inputEmail).then((res) => {
              if (res.status === 200) {
                Toast('Please check your email!');
                // navigation.navigate('VerifyPassword');
                navigation.navigate('Login');
              } else if (res.status === 500) {
                Toast('Email is not correct');
              }
            })
          }} />
        </View>
      </View>
    </View>
  )
}

const mapStatetoProps = state => {
  return state;
};

const mapDispathtoProps = {
  Req_User_Forget_Pass
};

export default connect(
  mapStatetoProps,
  mapDispathtoProps,
)(ForgotPassword);

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