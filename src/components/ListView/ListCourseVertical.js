import React from 'react'
import { View, Text, ScrollView } from 'react-native'

import { ListItem } from 'react-native-elements';
import { Rating } from 'react-native-elements';

function ListCourses(props) {
  const { title, data, navigation } = props;

  return (
    <View>
      {title ? <Text style={{ fontWeight: "bold", padding: 10, fontSize: 25 }}>{title}</Text> : <></>}
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          {data.map((course, index) => (
            <View key={index}>
              <ListItem
                leftAvatar={{
                  source: { uri: course.image },
                  rounded: false,
                }}
                title={course.title}
                // title={((course.title).length > 50) ?
                //   (((course.title).substring(0, 50 - 3)) + '...') :
                //   course.title}
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
