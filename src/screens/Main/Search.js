import React from 'react'
import { View, StyleSheet } from 'react-native';

import { SearchBar } from 'react-native-elements';

import ListCourseVertical from '../../components/ListView/ListCourseVertical'

const dataCourses = [
  {
    title: "Couse 1",
    subTitle: "Basic - 4/9/2020",
    image: "https://hocban.vn/wp-content/uploads/2017/06/Nhung-chen-javascript-vao-html-scaled.jpg",
    rate: 4
  },
  {
    title: "Couse 2",
    subTitle: "Basic - 4/9/2020",
    image: "https://hocban.vn/wp-content/uploads/2017/06/Nhung-chen-javascript-vao-html-scaled.jpg",
    rate: 4
  },
  {
    title: "Couse 3",
    subTitle: "Basic - 4/9/2020",
    image: "https://hocban.vn/wp-content/uploads/2017/06/Nhung-chen-javascript-vao-html-scaled.jpg",
    rate: 5
  },
  {
    title: "Couse 4",
    subTitle: "Basic - 4/9/2020",
    image: "https://hocban.vn/wp-content/uploads/2017/06/Nhung-chen-javascript-vao-html-scaled.jpg",
    rate: 5
  },
  {
    title: "Couse 5",
    subTitle: "Basic - 4/9/2020",
    image: "https://hocban.vn/wp-content/uploads/2017/06/Nhung-chen-javascript-vao-html-scaled.jpg",
    rate: 5
  },
  {
    title: "Couse 6",
    subTitle: "Basic - 4/9/2020",
    image: "https://hocban.vn/wp-content/uploads/2017/06/Nhung-chen-javascript-vao-html-scaled.jpg",
    rate: 5
  },
  {
    title: "Couse 7",
    subTitle: "Basic - 4/9/2020",
    image: "https://hocban.vn/wp-content/uploads/2017/06/Nhung-chen-javascript-vao-html-scaled.jpg",
    rate: 5
  },
  {
    title: "Couse 7",
    subTitle: "Basic - 4/9/2020",
    image: "https://hocban.vn/wp-content/uploads/2017/06/Nhung-chen-javascript-vao-html-scaled.jpg",
    rate: 5
  }
]

function Search() {
  return (
    <View>
      <View style={styles.headerSearch}>
        <SearchBar
          placeholder="Type Here..."
          lightTheme={true}
          round={true}
          clearIcon={false}
          autoFocus={true}
        />
      </View>
      <ListCourseVertical title="" dataCourses={dataCourses} />
    </View>
  )
}

export default Search

const styles = StyleSheet.create({
  headerSearch: {
    paddingTop: 30,
    backgroundColor: "#dae2ea"
  },
})