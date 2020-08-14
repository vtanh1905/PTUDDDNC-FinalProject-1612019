import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

import { ListItem } from 'react-native-elements';
import { Rating } from 'react-native-elements';

function ListCourses(props) {
  const { navigation, lightTheme, data } = props;

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
