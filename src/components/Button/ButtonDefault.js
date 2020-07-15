import React from 'react'
import { StyleSheet, Button, View, TouchableOpacity, Text, ActivityIndicator } from 'react-native';

function ButtonDefault(props) {
    const { width, title, loading } = props;
    // return (
    //     <Button {...props} color="#6C757D" />
    // )
    return (
        <TouchableOpacity disabled={loading} style={{ alignItems: "center", paddingHorizontal: 5, paddingVertical: 10, backgroundColor: "#6C757D" }} {...props}>
            {loading ? <ActivityIndicator color="white" size={21.7} /> : <Text style={{ fontWeight: "bold", fontSize: 16, color: "white" }}>{title}</Text>}
        </TouchableOpacity>
    )
}

export default ButtonDefault

const styles = StyleSheet.create({
});