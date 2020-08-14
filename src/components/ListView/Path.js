import React from 'react'
import { StyleSheet, View, Text } from 'react-native';
import { Card, Title } from 'react-native-paper';

function Path(props) {
  const { data, lightTheme, navigation } = props;
  const arrDate = data.updatedAt.substring(0, 10).split("-");

  return (
    <View style={{ width: 200 }}>
      <Card onPress={() => { navigation.navigate('ListCourses', { data: data }) }}>
        {/* <Card.Cover style={{ height: 100 }} source={{ uri: image }} /> */}
        <Card.Content style={{ backgroundColor: `${lightTheme ? 'white' : 'rgb(60, 63, 68)'}` }}>
          <Text style={{ fontSize: 20, marginTop: 0, fontWeight: "bold", color: lightTheme ? "#000000" : "#FFFFFF" }}>
            {(data.name.length > 23) ?
              (((data.name).substring(0, 23 - 3)) + '...') :
              data.name}
          </Text>
          <Text style={{ color: lightTheme ? "#000000" : "#FFFFFF", fontSize: 9 }}>Last Update:  {arrDate[2] + '/' + arrDate[1] + '/' + arrDate[0]}</Text>
        </Card.Content>
      </Card>
    </View >
  )
}

export default Path
