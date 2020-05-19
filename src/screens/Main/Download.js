import React from 'react'
import { StyleSheet, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

function Download() {
    return (
        <View style={styles.centered}>
            <Icon name="arrow-with-circle-down" size={100} color="gray" />
            <Text style={{ fontSize: 17, fontWeight: "bold" }}>No downloads</Text>
            <Text style={{ fontSize: 17 }}>Courses you download will appear here</Text>
        </View>
    )
}

export default Download

const styles = StyleSheet.create({
    centered: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})