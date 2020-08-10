import React, { useState, useContext } from 'react'
import { View, StyleSheet, ScrollView } from 'react-native';

import { SearchBar, ListItem, Icon } from 'react-native-elements';

import TabView from 'components/TabView'
import ThemeContext from '../../contexts/ThemeContext'

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
import HistorySearch from '../../components/HistorySearch'

function Search(props) {
  const { navigation } = props;
  const [inputSearch, setInputSearch] = useState("")
  const { themeLight } = useContext(ThemeContext)
  const [showHistorySearch, setShowHistorySearch] = useState(false)

  return (
    <View style={{ flex: 1, fontSize: 9, ...themeLight.styles.background1 }}>
      <View style={{
        marginTop: -1,
        backgroundColor: "#dae2ea"
      }}>
        <SearchBar
          placeholder="Type Here..."
          lightTheme={themeLight.isLightTheme}
          // round={true}
          clearIcon={false}
          autoFocus={true}
          onChangeText={(text) => setInputSearch(text)}
          value={inputSearch}
          showSoftInputOnFocus={true}
        />
      </View>
      {/* <View style={{ position: "absolute", top: 58, left: '2%', zIndex: 100, width: '96%' }}>
        <HistorySearch visible={showHistorySearch} />
      </View> */}
      {inputSearch !== "" ?
        <View style={{ flex: 1 }}>
          <TabView
            lightTheme={themeLight.isLightTheme}
            routes={[
              { key: 'ALL', title: 'ALL' },
              { key: 'COURSES', title: 'COURSE' },
              // { key: 'PATHS', title: 'PATH' },
              { key: 'AUTHORS', title: 'AUTHOR' },
            ]}
            scenes={[
              (jumpTo) => <ListAll jumpTo={jumpTo} navigation={navigation} lightTheme={themeLight.isLightTheme} />,
              () => <ScrollView showsVerticalScrollIndicator={false}><ListCourses navigation={navigation} lightTheme={themeLight.isLightTheme} /></ScrollView>,
              // () => <ScrollView showsVerticalScrollIndicator={false}><ListPaths navigation={navigation} lightTheme={themeLight.isLightTheme} /></ScrollView>,
              () => <ScrollView showsVerticalScrollIndicator={false}><ListAuthors navigation={navigation} lightTheme={themeLight.isLightTheme} /></ScrollView>
            ]}
          />
        </View>
        : <></>}

    </View>
  )
}

export default Search
