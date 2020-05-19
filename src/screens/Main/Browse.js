import React from 'react'
import { View } from 'react-native';

import ListTag from '../../components/ListView/ListTag'

const dataTag = ["Javascript", "Java", "C#", "C++", "Pythod", "React native"]

function Browse() {
  return (
    <View>
      <ListTag title="Popular Skill" data={dataTag} />
    </View >
  )
}

export default Browse
