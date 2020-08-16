import React from 'react'
import { View, Text, ScrollView } from 'react-native'

import { ListItem } from 'react-native-elements';
import { Rating } from 'react-native-elements';

function Comments(props) {
  const { data, lightTheme } = props;

  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          {data.map((comment, index) => (
            <View key={index}>
              <ListItem
                leftAvatar={{
                  source: { uri: comment.user.avatar },
                  rounded: false,
                }}
                titleStyle={{ color: lightTheme ? "#000000" : "#FFFFFF", fontWeight: "bold" }}
                title={comment.user.name}
                linearGradientProps={!lightTheme ? {
                  colors: ['rgb(60, 63, 68)', "rgb(60, 63, 68)"],
                } : null}
                bottomDivider
                subtitle={(
                  <View>
                    <View style={{ alignItems: "flex-start" }}>
                      <Text style={{ color: lightTheme ? "#000000" : "#FFFFFF" }}>{comment.content}</Text>
                      {lightTheme ?
                        <Rating imageSize={20} readonly startingValue={comment.averagePoint} />
                        :
                        <Rating type='custom' tintColor={lightTheme ? "white" : "rgb(60, 63, 68)"} imageSize={20} readonly startingValue={(comment.averagePoint)} />
                      }

                    </View>
                  </View>
                )}
              />
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  )
}

export default Comments
