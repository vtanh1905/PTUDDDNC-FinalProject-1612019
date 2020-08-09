import React from 'react'
import { StyleSheet, View, Text, } from 'react-native'

import { Modal, Colors, ProgressBar } from 'react-native-paper';

function ModalDownload(props) {
  const { value, visible, setVisible } = props;
  console.log(value);
  return (
    <Modal visible={visible}>
      <View style={{ backgroundColor: "white", height: 50, marginHorizontal: 50, padding: 10 }}>
        <ProgressBar progress={0.7} color={Colors.blue400} />
      </View>
    </Modal>
  )
}

export default ModalDownload
