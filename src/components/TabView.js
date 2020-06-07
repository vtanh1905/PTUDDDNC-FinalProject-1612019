import React, { useState } from 'react'
import { StyleSheet, View, Dimensions } from 'react-native'
import { TabView as TabViewLibrary, SceneMap, TabBar } from 'react-native-tab-view';

const initialLayout = { width: Dimensions.get('window').width };

function TabView(props) {
  const { routes, scenes, index, setIndex } = props;

  const temp = {};
  routes.forEach((item, index) => {
    temp[item.key] = scenes[index];
    // scenes[index] = scenes[index](setIndex)
  });

  const renderScene = SceneMap(temp);
  // const renderScene = ({ route, jumpTo }) => {
  //   if('ALL'){
  //     return 
  //   }
  //   switch (route.key) {
  //     case 'ALL':
  //       return <MusicRoute jumpTo={jumpTo} />;
  //     case 'albums':
  //       return <AlbumsRoute jumpTo={jumpTo} />;
  //   }
  // };

  return (
    <TabViewLibrary
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
      renderTabBar={props => <TabBar
        {...props}
        indicatorStyle={{ backgroundColor: 'white' }}
        style={{ backgroundColor: '#6C757D' }} />}
    />
  )
}

export default TabView

var styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
});