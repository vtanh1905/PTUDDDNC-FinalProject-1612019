import React from 'react'
import { View, Text, ScrollView } from 'react-native'

import { ListItem } from 'react-native-elements';
import { Rating } from 'react-native-elements';

function ListCourses(props) {
  const { title, data, lightTheme, navigation } = props;

  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          {data.map((course, index) => (
            <View key={index}>
              <ListItem
                leftAvatar={{
                  source: { uri: course.imageUrl },
                  rounded: false,
                }}
                titleStyle={{ color: lightTheme ? "#000000" : "#FFFFFF", fontWeight: "bold" }}
                title={((course.title).length > 35) ?
                  (((course.title).substring(0, 35 - 3)) + '...') :
                  course.title}
                linearGradientProps={!lightTheme ? {
                  colors: ['rgb(60, 63, 68)', "rgb(60, 63, 68)"],
                } : null}
                bottomDivider
                subtitle={(
                  <View>
                    {/* <Text style={{ color: lightTheme ? "#000000" : "#FFFFFF" }}>{course.status + " " + course.totalHours + "H"}</Text> */}
                    <View style={{ alignItems: "flex-start" }}>
                      {lightTheme ?
                        <Rating imageSize={20} readonly startingValue={(course.formalityPoint + course.contentPoint + course.presentationPoint) / 3} />
                        :
                        <Rating type='custom' tintColor={lightTheme ? "white" : "rgb(60, 63, 68)"} imageSize={20} readonly startingValue={(course.formalityPoint + course.contentPoint + course.presentationPoint) / 3} />
                      }

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
