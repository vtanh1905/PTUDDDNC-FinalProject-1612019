import React from 'react'
import { StyleSheet, View, Text } from 'react-native';
import { Card, Title } from 'react-native-paper';

function Path(props) {
  const { image, title, subTitle, rate, navigation } = props;

  return (
    <View style={{ width: 200 }}>
      <Card onPress={() => { navigation.navigate('CourseDetail') }}>
        <Card.Cover style={{ height: 100 }} source={{ uri: image }} />
        <Card.Content>
          <Text style={{ fontSize: 14, marginTop: 10, fontWeight: "bold" }}>
            {((title).length > 23) ?
              (((title).substring(0, 23 - 3)) + '...') :
              title}
          </Text>
          <Text>{subTitle}</Text>
        </Card.Content>
      </Card>
    </View >
  )
}

export default Path
