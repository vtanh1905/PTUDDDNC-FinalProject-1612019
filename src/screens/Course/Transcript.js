import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

function Transcript(props) {
  const { lightTheme } = props;
  return (
    <View style={{ height: 50, alignSelf: "center", justifyContent: "center" }}>
      <Text style={{ color: lightTheme ? "#000000" : "#FFFFFF", fontSize: 20, fontWeight: "bold" }}>No Things</Text>
    </View>
  )
}

export default Transcript
