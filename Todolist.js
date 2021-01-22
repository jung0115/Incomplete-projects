import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';
//채크박스 체크가 안 됨

export default class Todolist extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            checked: false,
            todo: "책 한 권 읽기"
        }
    }
    Check() {
        this.state.checked = !this.state.checked;
        alert(this.state.checked);
        return (
            <Todolist/>
        );
    }

    render() {
        return (
            <View style = {styles.container}>
                <View style = {styles.title}>
                    <Text style = {styles.todoTitle}>오늘 할 일</Text>
                </View>
                <View style = {styles.checkbox}>
                    <TouchableOpacity onPressOut={()=>(this.Check())}>
                        { this.state.checked
                        ? <Ionicons size = {25} name = "checkbox-outline" color = "black"/> //체크 된 경우
                        : <Ionicons size = {25} name = "square-outline" color = "black"/> //체크가 안 된 경우
                        }
                    </TouchableOpacity>
                    <Text style = {styles.todoList}>{this.state.todo}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FBF5ED",
        justifyContent: "flex-start"
    },
    title: {
        alignItems: "center"
    },
    checkbox: {
        flexDirection: "row",
        alignItems: "flex-start",
        paddingHorizontal: 35
    },
    todoTitle: {
        fontSize: 28,
        padding: 15
    },
    todoList: {
        fontSize: 22,
        paddingHorizontal: 6
    }
});