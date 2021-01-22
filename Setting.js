import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Setting(){
    return (
        <View style = {styles.container}>
            <Text style = {styles.text}>설정창</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    text: {
        alignItems: "center",
        justifyContent: "center",
        fontSize: 20
    }
});