import React, { useContext, useEffect } from 'react'
import { View, ScrollView, Text, Image } from 'react-native';
import { connect } from 'react-redux';

import ListCourseHorizontal from 'components/ListView/ListCourseHorizontal'
import { LISTCOURSES } from '../../assets/data'
import ThemeContext from '../../contexts/ThemeContext'
import UserContext from '../../contexts/UserContext'
import { Req_Course_NewRealease } from '../../reducers/course/API_Course_NewRealease'
import { Req_Course_TopRate } from '../../reducers/course/API_Course_TopRate'

function Home(props) {
  const { navigation, Req_Course_NewRealease, API_Course_NewRealease, Req_Course_TopRate, API_Course_TopRate } = props;
  const { themeLight } = useContext(ThemeContext)
  const { user } = useContext(UserContext)

  useEffect(() => {
    Req_Course_NewRealease(user.id);
    Req_Course_TopRate();
  }, [])

  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ width: '95%', paddingVertical: 10, alignSelf: "center" }}>
          <Image style={{ width: '100%', height: 100 }} resizeMode="stretch" source={{ uri: 'https://i1.wp.com/d8it4huxumps7.cloudfront.net/bites/wp-content/uploads/2020/04/15140539/How-Coronavirus-is-making-Online-Education-go-viral-in-India.png?fit=696%2C398&ssl=1' }} />
        </View>
        <Text style={{ textAlign: 'justify', fontWeight: '600', fontSize: 14, paddingHorizontal: 10, paddingBottom: 30, ...themeLight.styles.text }}>
          With Study Online, you can build and apply skills in top technologies. You have free access to Skill IQ, Role IQ, a limited library of courses and a weekly rotation of new courses.
        </Text>
        {!API_Course_NewRealease.loading && API_Course_NewRealease.data !== null &&
          <ListCourseHorizontal title="New Realease" data={API_Course_NewRealease.data} navigation={navigation} lightTheme={themeLight.isLightTheme} />
        }

        {!API_Course_TopRate.loading && API_Course_TopRate.data !== null &&
          <ListCourseHorizontal title="Top Rate" data={API_Course_TopRate.data} navigation={navigation} lightTheme={themeLight.isLightTheme} />
        }
      </ScrollView>
    </View>
  )
}

const mapStatetoProps = state => {
  return state;
};

const mapDispathtoProps = {
  Req_Course_NewRealease,
  Req_Course_TopRate
};

export default connect(
  mapStatetoProps,
  mapDispathtoProps,
)(Home);

