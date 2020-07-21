import React, { useContext, useEffect } from 'react'
import { View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { Req_Category_All } from '../../reducers/category/API_Category_All'
import { Req_Instructor_GetAll } from '../../reducers/instructor/API_Instructor_GetAll'

import ListTag from 'components/ListView/ListTag'

import ListAuthor from 'components/ListView/ListAuthor'

import ListPath from 'components/ListView/ListPath'

import TextOverImage from 'components/TextOverImage'

import { SKILLS, AUTHORS, PATHS } from '../../assets/data'
import ThemeContext from '../../contexts/ThemeContext'

function Browse(props) {
  const { navigation, API_Category_All, Req_Category_All, Req_Instructor_GetAll, API_Instructor_GetAll } = props;
  const { themeLight } = useContext(ThemeContext)
  useEffect(() => {
    Req_Category_All();
    Req_Instructor_GetAll();
  }, [])

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View>
        <TouchableOpacity
          style={{ width: '100%', height: 100, paddingLeft: 10, paddingRight: 10, marginTop: 10 }}
          onPress={() => navigation.navigate('ListCoursesImage', {
            title: "New Releases",
            imageURL: "https://image.freepik.com/free-vector/abstract-galaxy-background_1199-247.jpg",
          })}
        >
          <TextOverImage imageURL={"https://image.freepik.com/free-vector/abstract-galaxy-background_1199-247.jpg"}>
            New Releases
          </TextOverImage>
        </TouchableOpacity >

        <TouchableOpacity
          style={{ width: '100%', height: 100, paddingLeft: 10, paddingRight: 10, marginTop: 10 }}
          onPress={() => navigation.navigate('ListCoursesImage', {
            title: "Recommend",
            imageURL: "https://i.pinimg.com/originals/6a/cf/ca/6acfca1a27621309d224732ac7069223.jpg",
          })}
        >
          <TextOverImage imageURL={"https://i.pinimg.com/originals/6a/cf/ca/6acfca1a27621309d224732ac7069223.jpg"}>
            Recommend
          </TextOverImage>
        </TouchableOpacity>

        <View style={{ width: '100%', height: 100, paddingLeft: 10, paddingRight: 10, marginTop: 10, flexDirection: "row" }}>
          <TouchableOpacity
            style={{ width: '49%', height: 100, marginRight: '2%' }}
            onPress={() => navigation.navigate('ListCoursesImage', {
              title: "Best Seller",
              imageURL: "https://imgs.classicfm.com/images/61630?width=1000&crop=16_9&signature=UOxsAc4VhzNYQEIG-RTXur_mix8=",
            })}
          >
            <TextOverImage fontSize={20} imageURL={"https://imgs.classicfm.com/images/61630?width=1000&crop=16_9&signature=UOxsAc4VhzNYQEIG-RTXur_mix8="}>
              Best Seller
            </TextOverImage>
          </TouchableOpacity>

          <TouchableOpacity
            style={{ width: '49%', height: 100 }}
            onPress={() => navigation.navigate('ListCoursesImage', {
              title: "Favourite",
              imageURL: "https://images.unsplash.com/photo-1496715976403-7e36dc43f17b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
            })}
          >
            <TextOverImage fontSize={20} imageURL={"https://images.unsplash.com/photo-1496715976403-7e36dc43f17b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"}>
              Favourite
            </TextOverImage>
          </TouchableOpacity>

        </View>

        {/* <View style={{ marginVertical: 15 }}>
          <ListTag title="Popular Skill" data={SKILLS} lightTheme={themeLight.isLightTheme} />
        </View> */}
        {!API_Category_All.loading && API_Category_All.data !== null &&
          <View style={{ marginVertical: 15 }}>
            <ListPath title="Category" data={API_Category_All.data} navigation={navigation} lightTheme={themeLight.isLightTheme} />
          </View>
        }


        {!API_Instructor_GetAll.loading && API_Instructor_GetAll.data !== null &&
          <View style={{ marginTop: 15 }}>
            <ListAuthor title="Top Author" data={API_Instructor_GetAll.data} lightTheme={themeLight.isLightTheme} />
          </View>
        }

      </View >
    </ScrollView>
  )
}

const mapStatetoProps = state => {
  return state;
};

const mapDispathtoProps = {
  Req_Category_All,
  Req_Instructor_GetAll
};

export default connect(
  mapStatetoProps,
  mapDispathtoProps,
)(Browse);

