import React, { useState } from 'react'
import { StyleSheet, View, Dimensions } from 'react-native'
import { TabView as TabViewLibrary, SceneMap, TabBar } from 'react-native-tab-view';

const initialLayout = { width: Dimensions.get('window').width };

function TabView(props) {
  const { routes, scenes } = props;
  const [index, setIndex] = useState(0);
  const temp = {};
  routes.forEach((item, index) => {
    temp[item.key] = scenes[index];
  });

  // const renderScene = SceneMap(temp);
  const renderScene = ({ route, jumpTo }) => {
    if (route.key === "ALL") {
      return temp[route.key](jumpTo);
    }
    return temp[route.key]();
  };
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