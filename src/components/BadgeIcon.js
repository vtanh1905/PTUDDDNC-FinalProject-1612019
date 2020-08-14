import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

function BadgeIcon(props) {
  const { icon, title, lightTheme, onPress } = props;
  return (
    <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center' }} onPress={onPress}>
      <View style={{ height: 50, width: 50, backgroundColor: '#6C757D', justifyContent: 'center', alignItems: 'center', borderRadius: 100 }}>
        {icon}
      </View>
      <View>
        <Text style={{ fontSize: 12, fontWeight: "bold", textAlign: 'center', width: '100%', color: lightTheme ? "#000000" : "#FFFFFF" }}>{title}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default BadgeIcon
