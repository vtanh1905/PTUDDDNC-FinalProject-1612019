import React from 'react'
import { StyleSheet, View } from 'react-native';
import { TextInput } from 'react-native-paper';

import ButtonDefault from '../../components/Button/ButtonDefault'
function VerifyPassword(props) {
  const { navigation } = props;
  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <View style={{ marginBottom: 7 }}>
          <TextInput
            label='Code'
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

        <View style={{ marginBottom: 7 }}>
          <TextInput
            label='Confirm Password'
            secureTextEntry={true}
            theme={{ colors: { primary: "#2089DC" } }}
          />
        </View>

        <View>
          <ButtonDefault title="Confirm" />
        </View>
      </View>
    </View>
  )
}

export default VerifyPassword

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