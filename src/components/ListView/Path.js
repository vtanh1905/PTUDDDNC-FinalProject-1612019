import React from 'react'
import { StyleSheet, View, Text } from 'react-native';
import { Card, Title } from 'react-native-paper';

function Path(props) {
  const { image, title, subTitle, rate, lightTheme, navigation } = props;

  return (
    <View style={{ width: 200 }}>
      <Card onPress={() => { navigation.navigate('CourseDetail') }}>
        <Card.Cover style={{ height: 100 }} source={{ uri: image }} />
        <Card.Content style={{ backgroundColor: `${lightTheme ? 'white' : 'rgb(60, 63, 68)'}` }}>
          <Text style={{ fontSize: 14, marginTop: 10, fontWeight: "bold", color: lightTheme ? "#000000" : "#FFFFFF" }}>
            {((title).length > 23) ?
              (((title).substring(0, 23 - 3)) + '...') :
              title}
          </Text>
          <Text style={{ color: lightTheme ? "#000000" : "#FFFFFF" }}>{subTitle}</Text>
        </Card.Content>
      </Card>
    </View >
  )
}

export default Path
