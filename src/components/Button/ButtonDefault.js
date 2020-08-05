import React from 'react'
import { StyleSheet, Button, View, TouchableOpacity, Text, ActivityIndicator } from 'react-native';

function ButtonDefault(props) {
    const { width, title, loading, disabled } = props;
    // return (
    //     <Button {...props} color="#6C757D" /> #c2c9d3
    // )
    return (
        <TouchableOpacity disabled={disabled && loading} style={{ alignItems: "center", paddingHorizontal: 5, paddingVertical: 10, backgroundColor: "#6C757D" }} {...props}>
            {loading ? <ActivityIndicator color='white' size={21.7} /> : <Text style={{ fontWeight: "bold", fontSize: 16, color: `${disabled ? "#c2c9d3" : 'white'}` }}>{title}</Text>}
        </TouchableOpacity>
    )
}

export default ButtonDefault

const styles = StyleSheet.create({
});