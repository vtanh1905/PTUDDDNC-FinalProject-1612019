import React from 'react'
import { StyleSheet, Button, View, TouchableOpacity, Text } from 'react-native';

function ButtonDefault(props) {
    const { width, title } = props;
    // return (
    //     <Button {...props} color="#6C757D" />
    // )
    return (
        <TouchableOpacity style={{ alignItems: "center", paddingHorizontal: 5, paddingVertical: 10, backgroundColor: "#6C757D" }} {...props}>
            <Text style={{ fontWeight: "bold", fontSize: 16, color: "white" }}>{title}</Text>
        </TouchableOpacity>
    )
}

export default ButtonDefault

const styles = StyleSheet.create({
});