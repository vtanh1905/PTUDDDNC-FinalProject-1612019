import React from 'react'
import { View, Text } from 'react-native'
import { Video } from 'expo-av'
import VideoPlayer from 'expo-video-player'
import { WebView } from 'react-native-webview'
function PlayVideo(props) {
  const { urlVideo } = props;

  // urlVideo === null
  if (urlVideo === null || urlVideo === undefined) {
    return (
      <View style={{ height: 225, backgroundColor: "#000000", alignItems: "center", justifyContent: "center" }}>
        <Text style={{ color: "#FFFFFF", fontSize: 30 }}>No Video</Text>
      </View>
    )
  }

  // urlVideo Youtuble
  if (/www\.youtube\.com/.test(urlVideo)) {
    return (
      <View style={{ height: 225 }}>
        <WebView
          // style={styles.WebViewContainer}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          source={{ uri: 'https://www.youtube.com/embed/YE7VzlLtp-4' }}
        />
      </View>
    )
  }

  //Error
  return (
    <View>
      <VideoPlayer
        height={225}
        showFullscreenButton={false}

        videoProps={{
          shouldPlay: false,
          resizeMode: Video.RESIZE_MODE_STRETCH,
          source: {
            // uri: "https://youtube.com/embed/E-LUKWIBNmY"
            uri: urlVideo
          }

        }}
      // switchToLandscape={() => {
      //   changeScreenOrientation('LANDSCAPE');
      //   setCurrentOrientation('LANDSCAPE');
      // }}
      // switchToPortrait={() => changeScreenOrientation('PORTRAIT')}
      />
    </View>
  )
}

export default PlayVideo
