import React, { useContext } from 'react'
import { View, Text, StyleSheet } from 'react-native'

import { Subheading, Title, Avatar, Divider } from 'react-native-paper';

import ButtonDefault from 'components/Button/ButtonDefault'

import ThemeContext from '../../contexts/ThemeContext'
import UserContext from '../../contexts/UserContext'

function Profile(props) {
  const { navigation } = props;
  const { themeLight } = useContext(ThemeContext)
  const { user } = useContext(UserContext)

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
          <Avatar.Image size={100} source={{ uri: user.avatar }} />
        </View>

      </View>
      <View style={styles.fieldView}>
        <Subheading style={themeLight.styles.text}>Full Name</Subheading>
        <Title style={themeLight.styles.text}>{user.name}</Title>
      </View>
      <Divider />

      <View style={styles.fieldView}>
        <Subheading style={themeLight.styles.text}>Email</Subheading>
        <Title style={themeLight.styles.text}>{user.email}</Title>
      </View>
      <Divider />
      <View style={styles.fieldView}>
        <Subheading style={themeLight.styles.text}>Phone</Subheading>
        <Title style={themeLight.styles.text}>{user.phone}</Title>
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