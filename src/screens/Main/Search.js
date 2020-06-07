import React, { useState } from 'react'
import { View, StyleSheet, ScrollView } from 'react-native';

import { SearchBar } from 'react-native-elements';

import TabView from 'components/TabView'

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

import ListAll from 'components/ListInSearch/ListAll'
import ListCourses from 'components/ListInSearch/ListCourses'
import ListPaths from 'components/ListInSearch/ListPaths'
import ListAuthors from 'components/ListInSearch/ListAuthors'

function Search(props) {
  const { navigation } = props;
  const [inputSearch, setInputSearch] = useState("")

  return (
    <View style={{ flex: 1, backgroundColor: 'white', fontSize: 9 }}>
      <View style={styles.headerSearch}>
        <SearchBar
          placeholder="Type Here..."
          lightTheme={true}
          round={true}
          clearIcon={false}
          autoFocus={true}
          onChangeText={(text) => setInputSearch(text)}
          value={inputSearch}
        />
      </View>
      {inputSearch !== "" ?
        <View style={{ flex: 1 }}>
          <TabView
            routes={[
              { key: 'ALL', title: 'ALL' },
              { key: 'COURSES', title: 'COURSE' },
              { key: 'PATHS', title: 'PATH' },
              { key: 'AUTHORS', title: 'AUTHOR' },
            ]}
            scenes={[
              (jumpTo) => <ListAll jumpTo={jumpTo} navigation={navigation} />,
              () => <ScrollView showsVerticalScrollIndicator={false}><ListCourses navigation={navigation} /></ScrollView>,
              () => <ScrollView showsVerticalScrollIndicator={false}><ListPaths navigation={navigation} /></ScrollView>,
              () => <ScrollView showsVerticalScrollIndicator={false}><ListAuthors navigation={navigation} /></ScrollView>
            ]}
          />
        </View>
        : <></>}

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