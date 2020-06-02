import React from 'react'
import { StyleSheet, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

function Fauvorite() {
    return (
        <View style={styles.centered}>
            <Icon name="arrow-with-circle-down" size={100} color="gray" />
            <Text style={{ fontSize: 17, fontWeight: "bold" }}>No Fauvorite</Text>
            <Text style={{ fontSize: 17 }}>Your fauvorite courses will appear here</Text>
        </View>
    )
}

export default Fauvorite

const styles = StyleSheet.create({
    centered: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})