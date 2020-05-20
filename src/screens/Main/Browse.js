import React from 'react'
import { View } from 'react-native';

import ListTag from '../../components/ListView/ListTag'

import ListAuthor from '../../components/ListView/ListAuthor'

const dataTag = ["Javascript", "Java", "C#", "C++", "Pythod", "React native"]

const dataAuthor = [
  {
    name: "John Cneter",
    imageURL: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"
  },
  {
    name: "John Cneter",
    imageURL: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"
  },
  {
    name: "John Cneter",
    imageURL: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"
  },
  {
    name: "John Cneter",
    imageURL: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"
  },
  {
    name: "John Cneter",
    imageURL: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"
  },
  {
    name: "John Cneter",
    imageURL: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"
  }
]

function Browse() {
  return (
    <View>
      <ListTag title="Popular Skill" data={dataTag} />

      <ListAuthor title="Top Author" data={dataAuthor} />
    </View >
  )
}

export default Browse
