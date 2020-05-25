import React from 'react'
import { View, Text, ScrollView } from 'react-native'

import { ListItem } from 'react-native-elements';
import { Rating } from 'react-native-elements';

function ListCourses(props) {
  const { title, dataCourses, navigation } = props;

  return (
    <View>
      {title ? <Text style={{ fontWeight: "bold", padding: 10, fontSize: 25 }}>{title}</Text> : <></>}
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ height: (dataCourses.length + 1) * 100 + 10 }}>
          {dataCourses.map((course, index) => (
            <View style={{ height: 100 }} key={index}>
              <ListItem
                leftAvatar={{
                  source: { uri: course.image },
                  rounded: false,
                }}
                title={course.title}
                bottomDivider
                subtitle={(
                  <View>
                    <Text>{course.subTitle}</Text>
                    <View style={{ alignItems: "flex-start" }}>
                      <Rating imageSize={20} readonly startingValue={course.rate} />
                    </View>
                  </View>
                )}
                onPress={() => navigation.navigate('CourseDetail')}
              />
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  )
}

export default ListCourses
