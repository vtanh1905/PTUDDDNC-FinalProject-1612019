import React, { useEffect } from 'react'
import { View, Text, ScrollView } from 'react-native'
import { Subheading, Title, Avatar, Divider, ActivityIndicator } from 'react-native-paper';
import { connect } from 'react-redux';

import { Req_Instructor_GetDetail } from '../../reducers/instructor/API_Instructor_GetDetail'
import ListTag from '../../components/ListView/ListTag'

function AuthorDetailCallAPI(props) {
  const { route, Req_Instructor_GetDetail, API_Instructor_GetDetail } = props;
  const { data, lightTheme } = route.params;


  useEffect(() => {
    Req_Instructor_GetDetail(data.id)
  }, [])


  if (API_Instructor_GetDetail.loading || API_Instructor_GetDetail.data === null) {
    return (
      <View style={{ height: '85%', justifyContent: "center", alignContent: "center" }}>
        <ActivityIndicator color="#0069D9" size={100} />
      </View>
    )
  }
  console.log(API_Instructor_GetDetail.data);
  return (
    <ScrollView>
      <View style={{ alignItems: "center", paddingTop: 15 }}>
        <Avatar.Image size={150} source={{ uri: API_Instructor_GetDetail.data.avatar }} />
        <Text style={{ fontSize: 25, fontWeight: "bold", color: lightTheme ? "#000000" : "#FFFFFF" }}>{API_Instructor_GetDetail.data.name}</Text>
      </View>
      <View style={{ paddingHorizontal: 10 }}>
        <Text style={{ fontWeight: "bold", color: lightTheme ? "#000000" : "#FFFFFF" }}>Intro</Text>
        <Text style={{ textAlign: 'justify', fontWeight: '600', color: lightTheme ? "#000000" : "#FFFFFF" }}>
          {API_Instructor_GetDetail.data.intro}
        </Text>
      </View>

      <View>
        <ListTag title="Skill" data={API_Instructor_GetDetail.data.skills} lightTheme={lightTheme} />
      </View>
    </ScrollView>
  )
}

const mapStatetoProps = state => {
  return state;
};

const mapDispathtoProps = {
  Req_Instructor_GetDetail
};

export default connect(
  mapStatetoProps,
  mapDispathtoProps,
)(AuthorDetailCallAPI);
