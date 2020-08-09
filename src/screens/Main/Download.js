import React, { useEffect, useContext } from 'react'
import { StyleSheet, View, Text, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/Entypo';

import ThemeContext from '../../contexts/ThemeContext'
import ListCourseVertical from 'components/ListView/ListCourseVertical2'
import { Req_Get_Course_Download } from '../../reducers/course/API_Get_Course_Download'

function Download(props) {
  const { themeLight } = useContext(ThemeContext)
  const { navigation, Req_Get_Course_Download, API_Get_Course_Download } = props;

  useEffect(() => {
    Req_Get_Course_Download()
  }, [])

  if (API_Get_Course_Download.loading || API_Get_Course_Download.data === null) {
    return (
      <View style={{ height: '85%', justifyContent: "center", alignContent: "center" }}>
        <ActivityIndicator color="#0069D9" size={100} />
      </View>
    )
  }

  return (
    <>
      {API_Get_Course_Download.data.length !== 0 ? (
        <View>
          <ListCourseVertical data={API_Get_Course_Download.data} navigation={navigation} lightTheme={themeLight.isLightTheme} />
        </View>
      ) : (
          <View style={styles.centered}>
            <Icon name="arrow-with-circle-down" size={100} color="gray" />
            <Text style={{ fontSize: 17, fontWeight: "bold" }}>No downloads</Text>
            <Text style={{ fontSize: 17 }}>Courses you download will appear here</Text>
          </View>
        )}
    </>
  )
}

const mapStatetoProps = state => {
  return state;
};

const mapDispathtoProps = {
  Req_Get_Course_Download
};

export default connect(
  mapStatetoProps,
  mapDispathtoProps,
)(Download);


const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})