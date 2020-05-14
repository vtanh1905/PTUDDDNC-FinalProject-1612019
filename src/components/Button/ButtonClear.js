import React from 'react'
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

function ButtonClear(props) {
    const { title } = props;
    return (
        <TouchableOpacity style={{ alignItems: "center", paddingHorizontal: 5, paddingVertical: 10 }} {...props}>
            <Text style={{ fontWeight: "bold", color: "#2089DC", fontSize: 16 }}>{title}</Text>
        </TouchableOpacity>
    )
}

export default ButtonClear
