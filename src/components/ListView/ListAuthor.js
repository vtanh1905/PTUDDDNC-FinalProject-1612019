import React from 'react'
import { StyleSheet, View, ScrollView, Text } from 'react-native';
import { Avatar } from 'react-native-elements';

function ListAuthor(props) {
  const { title, lightTheme, data } = props;
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={{ fontWeight: "bold", color: lightTheme ? "#000000" : "#FFFFFF" }}>{title}</Text>
      </View>
      <View style={styles.listTag}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
          {data.map((item, index) =>
            <View style={{ paddingHorizontal: 5 }} key={index}>
              <Avatar
                rounded
                size={100}
                source={{
                  uri: item.imageURL,
                }}
              />
              <Text style={{ textAlign: "center", fontWeight: "bold", color: lightTheme ? "#000000" : "#FFFFFF" }}>{item.name}</Text>
            </View>
          )}
        </ScrollView>
      </View>
    </View >
  )
}

export default ListAuthor

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
