import React, { useContext } from 'react'
import { StyleSheet, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import ThemeContext from '../../contexts/ThemeContext'

function Fauvorite() {
    const { themeLight } = useContext(ThemeContext)

    return (
        <View style={styles.centered}>
            <Icon name="arrow-with-circle-down" size={100} color="gray" />
            <Text style={{ fontSize: 17, fontWeight: "bold", ...themeLight.styles.text }}>No Fauvorite</Text>
            <Text style={{ fontSize: 17, ...themeLight.styles.text }}>Your fauvorite courses will appear here</Text>
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