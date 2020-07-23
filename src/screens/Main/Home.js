import React, { useContext } from 'react'
import { View, ScrollView, Text, Image } from 'react-native';

import ListCourseHorizontal from 'components/ListView/ListCourseHorizontal'

import { LISTCOURSES } from '../../assets/data'
import ThemeContext from '../../contexts/ThemeContext'
import UserContext from '../../contexts/UserContext'

function Home(props) {
  const { navigation } = props;
  const { themeLight } = useContext(ThemeContext)
  const { user } = useContext(UserContext)
  console.log(user);
  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ width: '95%', paddingVertical: 10, alignSelf: "center" }}>
          <Image style={{ width: '100%', height: 100 }} resizeMode="stretch" source={{ uri: 'https://i1.wp.com/d8it4huxumps7.cloudfront.net/bites/wp-content/uploads/2020/04/15140539/How-Coronavirus-is-making-Online-Education-go-viral-in-India.png?fit=696%2C398&ssl=1' }} />
        </View>
        <Text style={{ textAlign: 'justify', fontWeight: '600', fontSize: 14, paddingHorizontal: 10, paddingBottom: 30, ...themeLight.styles.text }}>
          With Study Online, you can build and apply skills in top technologies. You have free access to Skill IQ, Role IQ, a limited library of courses and a weekly rotation of new courses.
        </Text>
        <ListCourseHorizontal title={LISTCOURSES[0].title} data={LISTCOURSES[0].courses} navigation={navigation} lightTheme={themeLight.isLightTheme} />
        <ListCourseHorizontal title={LISTCOURSES[1].title} data={LISTCOURSES[1].courses} navigation={navigation} lightTheme={themeLight.isLightTheme} />
      </ScrollView>
    </View>
  )
}

export default Home
