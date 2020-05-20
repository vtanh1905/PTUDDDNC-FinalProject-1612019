import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Subheading, Title, Avatar, Divider, Headline } from 'react-native-paper';
import { Switch } from 'react-native-paper';

function Setting() {
    return (
        <View>
            <View style={styles.fieldView}>
                <Subheading>Require Wifi for streamminh</Subheading >
                <Switch
                    value={true}
                />
            </View>

            <View style={styles.fieldView}>
                <Subheading>Require Wifi for dowwnloading</Subheading >
                <Switch
                    value={true}
                />
            </View>

            <View style={styles.fieldView}>
                <Subheading>Show quiz at the end of video</Subheading >
                <Switch
                    value={true}
                />
            </View>

        </View>
    )
}

export default Setting

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    fieldView: {
        paddingHorizontal: 15,
        paddingVertical: 5,
        flexDirection: "row",
        justifyContent: "space-between"
    }
})