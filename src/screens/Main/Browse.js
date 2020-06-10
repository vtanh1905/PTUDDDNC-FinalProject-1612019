import React from 'react'
import { View, Image, ScrollView } from 'react-native';

import ListTag from 'components/ListView/ListTag'

import ListAuthor from 'components/ListView/ListAuthor'

import ListPath from 'components/ListView/ListPath'

import { SKILLS, AUTHORS, PATHS } from '../../assets/data'

function Browse(props) {
  const { navigation } = props;

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View>
        <View style={{ width: '95%', paddingVertical: 10, alignSelf: "center" }}>
          <Image style={{ width: '100%', height: 100 }} resizeMode="stretch" source={{ uri: 'https://www.2old2play.com/sites/default/files/styles/article_feature/public/new-release-new_1_24_4.png?itok=p_pIZ79z' }} />
        </View>

        <View style={{ width: '95%', paddingVertical: 10, alignSelf: "center" }}>
          <Image style={{ width: '100%', height: 100 }} resizeMode="stretch" source={{ uri: 'https://u.jimcdn.com/cms/o/s26dc516f78183cce/userlayout/img/category-recommended.png?t=1506829566' }} />
        </View>

        <View style={{ marginVertical: 15 }}>
          <ListTag title="Popular Skill" data={SKILLS} lightTheme={false} />
        </View>

        <View style={{ marginVertical: 15 }}>
          <ListPath title="Paths" data={PATHS} navigation={navigation} lightTheme={false} />
        </View>

        <View style={{ marginTop: 15 }}>
          <ListAuthor title="Top Author" data={AUTHORS} lightTheme={false} />
        </View>
      </View >
    </ScrollView>
  )
}

export default Browse
