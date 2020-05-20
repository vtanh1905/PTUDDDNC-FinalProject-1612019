import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import { Subheading, Title, Avatar, Divider } from 'react-native-paper';

import ButtonDefault from '../../components/Button/ButtonDefault'

function Profile() {
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
        <Subheading>Full Name</Subheading>
        <Title>Vũ Tuấn Anh</Title>
      </View>
      <Divider />
      <View style={styles.fieldView}>
        <Subheading>Birth Day</Subheading>
        <Title>19/05/1998</Title>
      </View>
      <Divider />
      <View style={styles.fieldView}>
        <Subheading>Email</Subheading>
        <Title>vtanh1905@gmail.com</Title>
      </View>
      <Divider />
      <View style={styles.fieldView}>
        <Subheading>Phone</Subheading>
        <Title>0966996874</Title>
      </View>
      <Divider />
      <View style={styles.fieldView}>
        <Subheading>Password</Subheading>
        <Title>***********</Title>
      </View>
      <Divider />
      <View style={styles.fieldView}>
        <ButtonDefault title="Change Password" />
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