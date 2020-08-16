import React, { useContext, useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import IconFeather from 'react-native-vector-icons/Feather';
import { Subheading, Title, Avatar, Divider, TextInput } from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker';
import { connect } from 'react-redux';

import ButtonDefault from 'components/Button/ButtonDefault'
import ButtonClear from 'components/Button/ButtonClear'

import ThemeContext from '../../contexts/ThemeContext'
import UserContext from '../../contexts/UserContext'

import { Req_User_Update_Profile } from '../../reducers/user/API_User_Update_Profile'
import Toast from 'components/Toast';

function Profile(props) {
  const { navigation, Req_User_Update_Profile, API_User_Update_Profile } = props;
  const { themeLight } = useContext(ThemeContext)
  const { user, setUser } = useContext(UserContext)
  const [canEdit, setCanEdit] = useState(false)
  const [imageURL, setImageURL] = useState(user.avatar)
  const [textFullName, setTextFullName] = useState(user.name)
  const [textPhone, setTextPhone] = useState(user.phone)

  const handleEdit = () => {
    setTextFullName(user.name)
    setTextPhone(user.phone)
    setCanEdit(!canEdit)
  }

  const handlePickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      if (!result.cancelled) {
        setImageURL(result.uri)
      }
    } catch (E) {
      console.log(E);
    }
  };

  const handleSubmit = () => {
    //"https://cdn.trochoiviet.com/wp-content/uploads/2016/08/pikachu.jpg"
    Req_User_Update_Profile(textFullName, imageURL, textPhone).then(res => {
      if (res.status === 200) {
        setUser(res.data.payload)
        setCanEdit(false)
        Toast("Change Successfully!")
      }
    })
  }

  return (
    <View style={styles.container}>

      <View style={{ alignItems: "center", paddingVertical: 10 }}>
        <TouchableOpacity onPress={canEdit ? handlePickImage : null}>
          <Avatar.Image size={100} source={{ uri: imageURL }} />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={{ position: 'absolute', top: 16, right: 23, zIndex: 99 }} onPress={handleEdit}>
        <IconFeather name="edit" size={25} style={{ color: `${canEdit ? 'gray' : `${themeLight.isLightTheme ? "#000000" : "#FFFFFF"}`}` }} />
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
          <ButtonDefault loading={API_User_Update_Profile.loading} title="Confirm" onPress={handleSubmit} />
          : <ButtonDefault title="Change Password" onPress={() => navigation.navigate('Change Password')} />}

      </View>
    </View>
  )
}

const mapStatetoProps = state => {
  return state;
};

const mapDispathtoProps = {
  Req_User_Update_Profile
};

export default connect(
  mapStatetoProps,
  mapDispathtoProps,
)(Profile);


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