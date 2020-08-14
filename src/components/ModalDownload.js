import React from 'react'
import { StyleSheet, View, Text, } from 'react-native'

import { Modal, Colors } from 'react-native-paper';

function ModalDownload(props) {
  const { value, visible, setVisible } = props;
  return (
    <Modal visible={visible}>
      <View style={{ backgroundColor: "white", height: 50, marginHorizontal: 50, padding: 10 }}>
        <Text>Download ({value * 100}%)</Text>
        <View style={{ backgroundColor: Colors.blue100, height: 5 }} />
        <View style={{ backgroundColor: Colors.blue600, height: 5, position: "absolute", top: 29, left: 10, width: value * 240 }} />
      </View>
    </Modal>
  )
}

export default ModalDownload
