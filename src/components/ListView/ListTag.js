import React from 'react'
import { StyleSheet, View, ScrollView, Text } from 'react-native';
import { Badge } from 'react-native-paper';

function ListTag(props) {
  const { title, data } = props;
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={{ fontWeight: "bold" }}>{title}</Text>
      </View>
      <View style={styles.listTag}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
          {data.map((item, index) => (
            <View style={{ paddingHorizontal: 3 }} key={index}>
              <Badge style={{ backgroundColor: "#6C757D", paddingHorizontal: 15, fontSize: 12 }} >{item}</Badge>
            </View>
          ))}
        </ScrollView>
      </View>
    </View >
  )
}

export default ListTag

const styles = StyleSheet.create({
  container: {
    paddingTop: 10
  },
  listTag: {
    flexDirection: "row",
    padding: 5
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
