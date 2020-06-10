import React, { useContext } from 'react'
import { View, Text, StyleSheet } from 'react-native'

import { Subheading, Title, Avatar, Divider } from 'react-native-paper';

import ButtonDefault from 'components/Button/ButtonDefault'

import { USER } from '../../assets/data'
import ThemeContext from '../../contexts/ThemeContext'

function Profile(props) {
  const { navigation } = props;
  const { themeLight } = useContext(ThemeContext)

  return (
    <View style={styles.container}>
      {/* <View style={styles.containerAvatar}>
        <Avatar.Image size={100} source={{ uri: 'https://hinhnendephd.com/wp-content/uploads/2019/10/anh-avatar-dep.jpg' }} />
        <View style={styles.containerUsername}>
          <Text style={styles.username}>Anh Vu</Text>
        </View>
      </View> */}
      <View style={{ alignItems: "center", paddingVertical: 10 }}>
        <View>
          <Avatar.Image size={100} source={{ uri: 'https://hinhnendephd.com/wp-content/uploads/2019/10/anh-avatar-dep.jpg' }} />
        </View>

      </View>
      <View style={styles.fieldView}>
        <Subheading style={themeLight.styles.text}>Full Name</Subheading>
        <Title style={themeLight.styles.text}>{USER.fullname}</Title>
      </View>
      <Divider />
      <View style={styles.fieldView}>
        <Subheading style={themeLight.styles.text}>Birth Day</Subheading>
        <Title style={themeLight.styles.text}>{USER.dob}</Title>
      </View>
      <Divider />
      <View style={styles.fieldView}>
        <Subheading style={themeLight.styles.text}>Email</Subheading>
        <Title style={themeLight.styles.text}>{USER.email}</Title>
      </View>
      <Divider />
      <View style={styles.fieldView}>
        <Subheading style={themeLight.styles.text}>Phone</Subheading>
        <Title style={themeLight.styles.text}>{USER.phone}</Title>
      </View>
      <Divider />
      <View style={styles.fieldView}>
        <Subheading style={themeLight.styles.text}>Password</Subheading>
        <Title style={themeLight.styles.text}>***********</Title>
      </View>
      <Divider />
      <View style={styles.fieldView}>
        <ButtonDefault title="Change Password" onPress={() => navigation.navigate('Change Password')} />
      </View>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerAvatar: {
    padding: 5,
    flexDirection: "row",
  },
  fieldView: {
    paddingHorizontal: 15,
    paddingVertical: 5,
  }
})