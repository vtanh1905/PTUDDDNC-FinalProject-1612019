import React from 'react'
import { View, Text, ScrollView } from 'react-native'

import { ListItem } from 'react-native-elements';
import { Rating } from 'react-native-elements';

function ListCourses(props) {
  const { title, data, lightTheme, navigation } = props;

  return (
    <View>
      {title ? <Text style={{ fontWeight: "bold", padding: 10, fontSize: 25, color: lightTheme ? "#000000" : "#FFFFFF" }}>{title}</Text> : <></>}
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          {data.map((course, index) => (
            <View key={index}>
              <ListItem
                leftAvatar={{
                  source: { uri: course.image },
                  rounded: false,
                }}
                titleStyle={{ color: lightTheme ? "#000000" : "#FFFFFF" }}
                title={course.title}
                linearGradientProps={!lightTheme ? {
                  colors: ['rgb(60, 63, 68)', "rgb(60, 63, 68)"],
                } : null}
                bottomDivider
                subtitle={(
                  <View>
                    <Text style={{ color: lightTheme ? "#000000" : "#FFFFFF" }}>{course.subTitle}</Text>
                    <View style={{ alignItems: "flex-start" }}>
                      <Rating type='custom' tintColor={lightTheme ? "white" : "rgb(60, 63, 68)"} imageSize={20} readonly startingValue={course.rate} />
                    </View>
                  </View>
                )}
                onPress={() => navigation.navigate('CourseDetail', { data: course })}

              />
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  )
}

export default ListCourses
