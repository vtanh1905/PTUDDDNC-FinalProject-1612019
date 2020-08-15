import React, { useState, useContext, useEffect } from 'react'
import { View, StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { SearchBar, ListItem, Icon } from 'react-native-elements';

import TabView from 'components/TabView'
import ThemeContext from '../../contexts/ThemeContext'

import ListAll from 'components/ListInSearch/ListAll'
import ListCourses from 'components/ListInSearch/ListCourses'
import ListPaths from 'components/ListInSearch/ListPaths'
import ListAuthors from 'components/ListInSearch/ListAuthors'
import HistorySearch from '../../components/HistorySearch'
import { Req_Search_Course } from '../../reducers/course/API_Course_Search'
import { Req_Get_History_Search } from '../../reducers/course/API_Course_Get_History_Search'

function Search(props) {
  const { navigation, Req_Search_Course, API_Course_Search, API_Course_Get_History_Search, Req_Get_History_Search } = props;
  const [inputSearch, setInputSearch] = useState("")
  const { themeLight } = useContext(ThemeContext)
  const [showHistorySearch, setShowHistorySearch] = useState(true)

  useEffect(() => {
    Req_Search_Course("")
    Req_Get_History_Search()
  }, [])

  const handleSearch = (text) => {
    setInputSearch(text)
    Req_Search_Course(text)
  }

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
          value={inputSearch}
          showSoftInputOnFocus={true}
          onChangeText={(text) => handleSearch(text)}
          onBlur={() => setShowHistorySearch(false)}
          onFocus={() => setShowHistorySearch(true)}
        />
      </View>

      {!API_Course_Get_History_Search.loading && API_Course_Get_History_Search.data !== null &&
        <View style={{ position: "absolute", top: 58, left: '2%', zIndex: 100, width: '96%' }}>
          <HistorySearch textSearch={inputSearch} setTextSearch={handleSearch} visible={showHistorySearch} data={API_Course_Get_History_Search.data} />
        </View>

      }



      {API_Course_Search.loading || API_Course_Search.data === null ?
        <View style={{ height: '85%', justifyContent: "center", alignContent: "center" }}>
          <ActivityIndicator color="#0069D9" size={100} />
        </View>
        :
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
              (jumpTo) => <ListAll jumpTo={jumpTo} navigation={navigation} lightTheme={themeLight.isLightTheme} dataCourses={API_Course_Search.data.courses.data} dataInstructors={API_Course_Search.data.instructors.data} />,
              () => <ScrollView showsVerticalScrollIndicator={false}><ListCourses navigation={navigation} lightTheme={themeLight.isLightTheme} data={API_Course_Search.data.courses.data} /></ScrollView>,
              // () => <ScrollView showsVerticalScrollIndicator={false}><ListPaths navigation={navigation} lightTheme={themeLight.isLightTheme} /></ScrollView>,
              () => <ScrollView showsVerticalScrollIndicator={false}><ListAuthors navigation={navigation} lightTheme={themeLight.isLightTheme} data={API_Course_Search.data.instructors.data} /></ScrollView>
            ]}
          />
        </View>
      }

    </View>
  )
}

const mapStatetoProps = state => {
  return state;
};

const mapDispathtoProps = {
  Req_Search_Course,
  Req_Get_History_Search
};

export default connect(
  mapStatetoProps,
  mapDispathtoProps,
)(Search);

