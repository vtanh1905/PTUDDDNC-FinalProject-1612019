import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

import { ListItem } from 'react-native-elements';
import { Rating } from 'react-native-elements';

const data = [
  {
    title: "The Complete JavaScript Course 2020: Build Real Projects!",
    subTitle: "Basic - 12/6/2020",
    image: "https://1.bp.blogspot.com/-KGHzaTFp_Gg/XO9PTwmOhYI/AAAAAAAAUY4/VnRaNu28icsSN8c90DX6-f-bkSHfZb4GgCLcBGAs/s1600/851712_fc61_5.jpg",
    rate: 4.6,
    author: {
      name: "John Cneter",
      imageURL: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
    },
    description: "Hi! Welcome to the Web Developer Bootcamp, the only course you need to learn web development. There are a lot of options for online developer training, but this course is without a doubt the most comprehensive and effective on the market",
  },
  {
    title: "Angular - The Complete Guide (2020 Edition)",
    subTitle: "Advance - 9/9/2020",
    image: "https://1.bp.blogspot.com/-CpZFRErv0NI/XmzyfdWoZgI/AAAAAAAAM7U/1PWFyrXf0PUXBdq2-zl-a-dmCmaK7ewpgCLcBGAsYHQ/s640/Angular-8-%25E2%2580%2593-The-Complete-Guide-2020-Edition.jpg",
    rate: 4,
    author: {
      name: "San",
      imageURL: "https://static.showit.co/800/Vh16SsMsQTGqj7qDG6J7vw/63035/headshots_actors-6.jpg"
    },
    description: "Angular 9 simply is the latest version of Angular 2, you will learn this amazing framework from the ground up in this course!",
  },
  {
    title: "The Web Developer Bootcamp",
    subTitle: "Basic - 4/5/2020",
    image: "https://img-a.udemycdn.com/course/750x422/625204_436a_2.jpg",
    rate: 5,
    author: {
      name: "Gallery",
      imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT2_YUm9dXZ9h-WgYwUqe32VpPN8Ok4H0oQ79EqTU43dN5Epu-8&usqp=CAU"
    },
    description: "Hi! Welcome to the Web Developer Bootcamp, the only course you need to learn web development. There are a lot of options for online developer training, but this course is without a doubt the most comprehensive and effective on the market",
  },
  {
    title: "The Complete 2020 Web Development Bootcamp",
    subTitle: "Advance - 9/9/2020",
    image: "https://img-a.udemycdn.com/course/750x422/1565838_e54e_11.jpg",
    rate: 4.7,
    author: {
      name: "John Cneter",
      imageURL: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
    },
    description: "Welcome to the Complete Web Development Bootcamp, the only course you need to learn to code and become a full-stack web developer. With over 12,000 ratings and a 4.8 average, my Web Development course is one of the HIGHEST RATED courses in the history of Udemy!",
  },
  {
    title: "Modern React with Redux [2020 Update]",
    subTitle: "Advance - 19/9/2020",
    image: "https://img-a.udemycdn.com/course/480x270/705264_caa9_11.jpg",
    rate: 4.6,
    author: {
      name: "Anna",
      imageURL: "https://images.fastcompany.net/image/upload/w_596,c_limit,q_auto:best,f_auto/wp-cms/uploads/2019/02/5-create-fake-people-in-2-seconds-on-this-insane-site.jpg"
    },
    description: "React is the most popular Javascript library of the last five years, and the job market is still hotter than ever.  Companies large and small can't hire engineers who understand React and Redux fast enough, and salaries for engineers are at an all time high.  It's a great time to learn React!",
  },
  {
    title: "Build Responsive Websites with HTML5  CSS3",
    subTitle: "Basic - 2/9/2020",
    image: "https://img-a.udemycdn.com/course/750x422/437398_46c3_9.jpg",
    rate: 3,
    author: {
      name: "John Cneter",
      imageURL: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
    },
    description: "Together we hand-code a beautiful and responsive landing page for a fictional company that I made up just for the course. Step-by-step, you will learn more and more HTML5 and CSS3 features, from beginner to advanced. These are the latest web technologies, used by every website in the world. And we even added some jQuery to the mix.",
  },
  {
    title: "Vue JS 2 - The Complete Guide (incl. Vue Router & Vuex)",
    subTitle: "Basic - 9/9/2020",
    image: "https://i.pinimg.com/736x/f7/2c/a4/f72ca477feed068fec3eebf9e44194c9.jpg",
    rate: 4.2,
    author: {
      name: "Gallery",
      imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT2_YUm9dXZ9h-WgYwUqe32VpPN8Ok4H0oQ79EqTU43dN5Epu-8&usqp=CAU"
    },
    description: "He knows how to teach. Splits every details into smaller parts and makes another video for each part. For this reason you don't feel yourself boring while watching videos because lots of them about 2-3 mins not more. One of the best teachers in Udemy that I saw.",
  }
]

function ListCourses(props) {
  const { navigation, lightTheme } = props;

  return (
    <View>
      {data.map((course, index) => (
        <View key={index}>
          <ListItem
            leftAvatar={{
              source: { uri: course.image },
              rounded: false,
            }}
            title={course.title}
            titleStyle={{ color: lightTheme ? "#000000" : "#FFFFFF" }}
            linearGradientProps={!lightTheme ? {
              colors: ['rgb(60, 63, 68)', "rgb(60, 63, 68)"],
            } : null}
            bottomDivider
            subtitle={(
              <View>
                <Text style={{ color: lightTheme ? "#000000" : "#FFFFFF" }}>{course.subTitle}</Text>
                <View style={{ alignItems: "flex-start" }}>
                  <Rating type='custom' tintColor={lightTheme ? "white" : "rgb(60, 63, 68)"} imageSize={20} readonly startingValue={course.rate} />
                </View>
              </View>
            )}
            onPress={() => navigation.navigate('CourseDetail', { data: course })}
          />
        </View>
      ))}
    </View>
  )
}

export default ListCourses
