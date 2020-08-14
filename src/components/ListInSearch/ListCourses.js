import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { ListItem } from 'react-native-elements';
import { Rating } from 'react-native-elements';

function ListCourses(props) {
  const { navigation, lightTheme, data } = props;

  if (data.length === 0) {
    return (
      <View style={styles.centered}>
        <Icon name="file-search-outline" size={100} color="gray" />
        <Text style={{ fontSize: 17, fontWeight: "bold" }}>Not Found</Text>
      </View>
    )
  }

  return (
    <View>
      {data.map((course, index) => (
        <View key={index}>
          <ListItem
            leftAvatar={{
              source: { uri: course.imageUrl },
              rounded: false,
            }}
            title={course.title}
            titleStyle={{ color: lightTheme ? "#000000" : "#FFFFFF" }}
            linearGradientProps={!lightTheme ? {
              colors: ['rgb(60, 63, 68)', "rgb(60, 63, 68)"],
            } : null}
            bottomDivider
            subtitle={(
              <View>
                {/* <Text style={{ color: lightTheme ? "#000000" : "#FFFFFF" }}>{course.subTitle}</Text> */}
                <View style={{ alignItems: "flex-start" }}>
                  <Rating type='custom' tintColor={lightTheme ? "white" : "rgb(60, 63, 68)"} imageSize={20} readonly startingValue={(course.formalityPoint + course.presentationPoint + course.contentPoint) / 3} />
                </View>
              </View>
            )}
            onPress={() => navigation.navigate('CourseDetail', { data: course })}
          />
        </View>
      ))}
    </View>
  )
}

export default ListCourses

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5
  },
})
