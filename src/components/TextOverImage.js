import React from 'react'
import { View, Text, ImageBackground } from 'react-native'

function TextOverImage(props) {
  const { imageURL, children, fontSize } = props;
  return (
    <ImageBackground resizeMode='cover' source={{
      uri: imageURL
    }} style={{
      width: '100%', height: '100%'
    }}>
      <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ color: "white", fontWeight: "bold", fontSize: fontSize || 30 }}>{children}</Text>
      </View>
    </ImageBackground>
  )
}

export default TextOverImage
