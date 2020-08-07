import React, { useContext, useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import IconFeather from 'react-native-vector-icons/Feather';
import { Subheading, Title, Avatar, Divider, TextInput } from 'react-native-paper';

import ButtonDefault from 'components/Button/ButtonDefault'
import ButtonClear from 'components/Button/ButtonClear'

import ThemeContext from '../../contexts/ThemeContext'
import UserContext from '../../contexts/UserContext'

function Profile(props) {
  const { navigation } = props;
  const { themeLight } = useContext(ThemeContext)
  const { user } = useContext(UserContext)
  const [canEdit, setCanEdit] = useState(false)
  const [textFullName, setTextFullName] = useState(user.name)
  const [textPhone, setTextPhone] = useState(user.phone)

  const handleEdit = () => {
    setTextFullName(user.name)
    setTextPhone(user.phone)
    setCanEdit(!canEdit)
  }

  return (
    <View style={styles.container}>

      <View style={{ alignItems: "center", paddingVertical: 10 }}>
        <View>
          <Avatar.Image size={100} source={{ uri: user.avatar }} />
        </View>
      </View>

      <TouchableOpacity style={{ position: 'absolute', top: 16, right: 23, zIndex: 99 }} onPress={handleEdit}>
        <IconFeather name="edit" size={25} style={{ color: `${canEdit ? 'gray' : '#000000'}` }} />
      </TouchableOpacity>


      <View style={styles.fieldView}>
        <TextInput label="Email" value={user.email} disabled={true} />
      </View>
      <Divider />

      <View style={styles.fieldView}>
        <TextInput label="Full Name" value={textFullName} disabled={!canEdit} onChangeText={(value) => setTextFullName(value)} />
      </View>
      <Divider />
      <View style={styles.fieldView}>
        <TextInput label="Phone" value={textPhone} disabled={!canEdit} onChangeText={(value) => setTextPhone(value)} />
      </View>
      <Divider />
      <Divider />
      <View style={styles.fieldView}>
        {canEdit ?
          <ButtonDefault title="Confirm" />
          : <ButtonDefault title="Change Password" onPress={() => navigation.navigate('Change Password')} />}

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