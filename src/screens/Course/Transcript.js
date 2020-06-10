import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

function Transcript(props) {
  const { lightTheme } = props;
  return (
    <View style={{ height: 50, alignSelf: "center", justifyContent: "center" }}>
      <Text style={{ color: lightTheme ? "#000000" : "#FFFFFF" }}>Transcript unavailable for this course.</Text>
    </View>
  )
}

export default Transcript
