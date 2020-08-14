import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import { Subheading, Title, Avatar, Divider } from 'react-native-paper';

import ListTag from '../../components/ListView/ListTag'

function AuthorDetail(props) {
  const { route } = props;
  const { data, lightTheme } = route.params;

  return (
    <ScrollView>
      <View style={{ alignItems: "center", paddingTop: 15 }}>
        <Avatar.Image size={150} source={{ uri: data["user.avatar"] }} />
        <Text style={{ fontSize: 25, fontWeight: "bold", color: lightTheme ? "#000000" : "#FFFFFF" }}>{data["user.name"]}</Text>
      </View>
      <View style={{ paddingHorizontal: 10 }}>
        <Text style={{ fontWeight: "bold", color: lightTheme ? "#000000" : "#FFFFFF" }}>Intro</Text>
        <Text style={{ textAlign: 'justify', fontWeight: '600', color: lightTheme ? "#000000" : "#FFFFFF" }}>
          {data.intro}
        </Text>
      </View>

      <View>
        <ListTag title="Skill" data={data.skills} lightTheme={lightTheme} />
      </View>
    </ScrollView>
  )
}

export default AuthorDetail
