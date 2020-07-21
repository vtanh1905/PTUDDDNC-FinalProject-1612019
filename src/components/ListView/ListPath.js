import React from 'react'
import { StyleSheet, View, ScrollView, Text } from 'react-native';
import { Badge } from 'react-native-paper';

import Path from './Path'



function ListPath(props) {
  const { title, data, lightTheme, navigation } = props;

  const renderPaths = () => {
    let temp = [];
    for (let i = 0; i < data.length; i += 2) {
      temp.push(
        <View style={styles.card} key={i}>
          <Path data={data[i]} image={data[i].image} navigation={navigation} lightTheme={lightTheme} />
          <View style={{ height: 20 }}></View>
          {i + 1 < data.length ? <Path data={data[i + 1]} navigation={navigation} lightTheme={lightTheme} /> : <></>}
        </View>
      );
    }
    return temp;
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={{ fontWeight: "bold", color: lightTheme ? "#000000" : "#FFFFFF" }}>{title}</Text>
        {/* <Badge style={{ backgroundColor: "#6C757D", paddingHorizontal: 15 }} onPress={() => navigation.navigate('Paths')}>See all</Badge> */}
      </View>
      <View style={styles.listCard}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
          {renderPaths()}
        </ScrollView>
      </View>
    </View >
  )
}

export default ListPath

const styles = StyleSheet.create({
  container: {
    paddingTop: 10
  },
  listCard: {
    flexDirection: "row",
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10
  },
  card: {
    padding: 10
  }
})
