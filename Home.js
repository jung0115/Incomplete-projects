import React, {Component} from "react";
import { StyleSheet, Text, View, TouchableOpacity  } from "react-native";
import Todolist from "./Todolist";
import Day_and_Cal from "./Day_and_Cal";
//import Setting from "./Setting";
import { Ionicons } from '@expo/vector-icons';
import { Fonts } from './src/Fonts';


export default class Home extends React.Component{
    render() {
        return (
            <View style = { styles.container }>
                <View style = { styles.setting }>
                    <Ionicons
                        style = { styles.settingButton }
                        size = {35}
                        name = "settings-outline"
                        color = "black"
                    />
                </View>
                <View style = {styles.title}>
                    <Text style = {styles.titleFont}>작심며칠</Text>
                </View>
                <View style = {styles.todolist}>
                    <Todolist/>
                </View>
                <View style = {styles.day_and_cal}>
                    <Day_and_Cal />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: { //전체
        flex: 1,
        backgroundColor: "#F4DFBE",
    },
    setting: { //설정 버튼
        flex: 1, // 1/8 차지
        alignItems: "flex-end",
        justifyContent: "center"
    },
    settingButton: {
        padding: 16 //설정 버튼 상하좌우 패딩 감싸기
    },
    title: { //앱 이름: 작심며칠
        flex: 1, // 1/8 차지
        alignItems: "center",
        justifyContent: "center"
    },
    titleFont: {
        fontSize: 52//,
        //fontFamily: "Binggrae"
    },
    todolist: { //오늘 할 일
        flex: 4, // 1/2 차지
        paddingHorizontal: 65 //오늘 할 일 네모칸 크기 조정을 위한 좌우패딩
    },
    day_and_cal: { //디데이와 달력
        flex: 2, // 1/4 차지
        paddingHorizontal: 65
    }
});